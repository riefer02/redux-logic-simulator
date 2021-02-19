import { combineReducers } from "redux";
import todosReducer from "./todos";
import filtersReducer from "./visibility";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filtersReducer,
});

export default rootReducer;
