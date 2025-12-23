import todoReducer from "./ToDoReducer";
import { createStore } from "redux";

export const store = createStore(todoReducer);