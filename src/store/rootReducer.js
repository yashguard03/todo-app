import { combineReducers } from "redux";
import Todo from "./todo/slice";

const rootReducer = combineReducers({
  // Todo
  Todo,
});

export default rootReducer;
