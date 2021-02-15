import { createStore } from "redux";
import todosReducer from "../reducers/todos";

export default function configureStore() {
  const store = createStore(
    todosReducer,
    ["The First Todo"],
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch({
    type: "ADD_TODO",
    text: "Read the docs",
  });

  return store;
}
