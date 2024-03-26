connectDb();
import { connectDb } from "@/helpers/server/db";
import { todoModel } from "./model";
import validate from "./validate.js";
import { errorResponse, successResponse } from "@/helpers/server/apiResponse";

// Get all todo's
export const GET = async () => {
  try {
    const allTodo = await todoModel.find({}).sort({ createdAt: -1 });
    const count = await todoModel.countDocuments();

    return successResponse({
      message: "Data fetch successfully",
      data: allTodo,
      count,
    });
  } catch (error) {
    return errorResponse({ funcName: "getAllTodo", error });
  }
};

// Create a todo's
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
      return errorResponse({ funcName: "createTodo", error });
    }
  });
};
