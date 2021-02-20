import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./localStorage";

import rootReducer from "../reducers/index";

const persistedTodosString = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedTodosString,
});

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

export default store;
