import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/index";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");
if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
