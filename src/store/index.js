import { createStore } from "redux";
import rootReducer from "../reducers/index";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");
if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch({
    type: "ADD_TODO",
    payload: "Read the docs",
  });

  return store;
}
