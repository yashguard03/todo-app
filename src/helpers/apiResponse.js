import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const successResponse = async ({
  statusCode = 200,
  success = true,
  message,
  data,
  ...options
}) => {
  return NextResponse.json(
    {
      success,
      message,
      ...options,
      data,
    },
    { status: statusCode }
  );
};

export const errorResponse = async ({
  funName,
  error,
  success = false,
  statusCode = 500,
  message = "Internal server error",
}) => {
  console.log(`[ERROR] ${funName} : ${error?.message}`);

  if (error instanceof mongoose.Error.CastError) {
    message = "Invalid ID provided";
  } else if (error instanceof mongoose.Error.DocumentNotFoundError) {
    message = "Document not found";
  } else if (error instanceof mongoose.Error.ValidationError) {
    message = "Validation failed";
    statusCode = 401;
  }
  if (error?.name === "MongoServerError" && error?.code === 11000) {
    statusCode = 400;
    message = "Document already exists";
  } else if (error?.name === "JsonWebTokenError") {
    message = "Invalid token";
    statusCode = 401;
  } else if (error?.name === "TokenExpiredError") {
    message = "Token expired";
    statusCode = 401;
  } else if (error?.name === "NotBeforeError") {
    message = "Token not yet valid";
    statusCode = 401;
  }

  console.log("message:", message);
  return NextResponse.json({ success, message }, { status: statusCode });
};

export const validateResponse = ({ error, statusCode = 400 }) => {
  let arrOjb = { message: "error", success: false };
  error?.details?.map((item) => {
    const { path, message } = item;
    arrOjb = { ...arrOjb, [path]: message.replace(/['"]/g, "") };
  });

  return NextResponse.json(arrOjb, { status: statusCode });
};
