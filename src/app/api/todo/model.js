import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const todoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
