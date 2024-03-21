import { connectDb } from "@/helpers/db";
import { NextResponse } from "next/server";
import { todoModel } from "./model";
import validate from "./validate.js";
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

export const POST = (req) => {
  return validate.createTodo(req, async () => {
    try {
      const { taskName } = await req.json();

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
