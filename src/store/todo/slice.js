import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  message: "",
  tasks: [],
};

const slice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.tasks.splice(0, 0, action.payload);
    },
  },
});

export const { setTodo } = slice.actions;
export default slice.reducer;
