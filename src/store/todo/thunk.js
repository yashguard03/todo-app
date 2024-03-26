import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodo as fetchGetTodo } from "@/helpers/client/backend_helper";

export const getTodo = createAsyncThunk(
  "getTodo",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetchGetTodo(query);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Oops! Something went wrong.";

      // Reject with error message
      return rejectWithValue(errorMessage);
    }
  }
);
