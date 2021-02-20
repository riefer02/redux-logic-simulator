import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     { id: nanoid(), text: "Learn React", completed: true, color: "orangered" },
//     { id: nanoid(), text: "Learn Redux", completed: false, color: "purple" },
//     {
//       id: nanoid(),
//       text: "Build something fun!",
//       completed: false,
//       color: "blue",
//     },
//   ],
// };

export const todosAdapter = createEntityAdapter();
export const todosSelectors = todosAdapter.getSelectors((state) => state.todos);

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState({
    deletedTodos: [],
  }),
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload]);
      todosAdapter.removeOne(state, action);
    },
    clearTodo: todosAdapter.removeAll,
    updateTodo: todosAdapter.updateOne,
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    restoreTodo(state, action) {
      todosAdapter.addOne(state, action);
      state.deletedTodos = state.deletedTodos.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  clearTodo,
  updateTodo,
  restoreTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
