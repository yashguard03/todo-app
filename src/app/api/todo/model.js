import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  taskName: { type: String, required: true, unique: true },
});

export const Todo = mongoose.models.todo || mongoose.model("todo", todoSchema);
