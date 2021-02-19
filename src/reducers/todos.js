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
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: todosAdapter.addOne,
    // addTodo(state, action) {
    //   const text = action.payload;
    //   state.todos.push({ id: nanoid(), text, completed: false });
    // },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: todosAdapter.removeOne,
    // removeTodo(state, action) {
    //   console.log("remove todo: " + action.payload);
    //   state.todos.filter((todo) => todo.id !== action.payload);
    // },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
