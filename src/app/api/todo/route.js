import { connectDb } from "@/helpers/db";
import { NextResponse } from "next/server";
import { todoModel } from "./model";
import Joi from "joi";
import {
  errorResponse,
  successResponse,
  validateResponse,
} from "@/helpers/apiResponse";
connectDb();

export const GET = async () => {
  return NextResponse.json({
    success: true,
    message: "Welcome to the todo page",
  });
};

export const POST = async (req) => {
  try {
    const { taskName } = await req.json();

    const schema = Joi.object({
      taskName: Joi.string().min(3).max(20).required(),
    });

    const { error } = schema.validate({ taskName });

    if (error) {
      return validateResponse({ error });
    }

    const newTodo = await todoModel.create({ taskName }); // Use Mongoose's create method

    const todos = await todoModel.find({}).sort({ createdAt: -1 }); // Use Mongoose's find method

    const count = await todoModel.countDocuments(); // Use Mongoose's countDocuments method

    return NextResponse.json({
      success: true,
      message: "Task has been created successfully",
      task: todos,
      count,
    });
  } catch (error) {
    console.log(error.code);
    return errorResponse({ error });
    // return NextResponse.json({
    //   success: false,
    //   message: "Failed to create a todo",
    //   error: error.message,
    // });
  }
};
