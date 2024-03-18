const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  error: "",
  message: "",
  tasks: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      console.log(action.payload);
      state.tasks.splice(0, 0, action.payload);
    },
  },
});

export const { setTodo } = todoSlice.actions;
export default todoSlice.reducer;
