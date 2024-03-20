import { connectDb } from "@/helpers/db";
import { NextResponse } from "next/server";
import { Todo } from "./model";
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

    const todo = new Todo({ taskName });

    const createdTodo = await todo.save();

    return NextResponse.json({
      success: true,
      message: "Task has been created successfully",
      task: createdTodo,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to create a todo",
      error: error.message,
    });
  }
};
