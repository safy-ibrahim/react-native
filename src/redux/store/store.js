import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/task-slice.js";

let tasksStore = configureStore({
  reducer: { task: taskReducer },
});
export default tasksStore;
