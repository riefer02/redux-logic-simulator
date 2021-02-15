const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    case "REMOVE_TODO":
      return [...state.filter((todo) => todo !== action.payload)];
    default:
      return state;
  }
};

export default todosReducer;
