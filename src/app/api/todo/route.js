connectDb();
import { connectDb } from "@/helpers/db";
import { NextResponse } from "next/server";
import { todoModel } from "./model";
import validate from "./validate.js";
import { errorResponse, successResponse } from "@/helpers/apiResponse";

export const GET = async () => {
  return NextResponse.json({
    success: true,
    message: "Welcome to the todo page",
  });
};

export const POST = async (req) => {
  const request = await req.json();
  return validate.createTodo(request, async () => {
    try {
      const { taskName } = await request;

      const createdTodo = await todoModel.create({ taskName });
      const allTodo = await todoModel.find({}).sort({ createdAt: -1 });
      const count = await todoModel.countDocuments();

      return successResponse({
        message: "Task has been created successfully",
        date: createdTodo,
        availableTodo: allTodo,
        count,
      });
    } catch (error) {
      return errorResponse({ error });
    }
  });
};
