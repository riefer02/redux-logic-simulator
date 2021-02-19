import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";
function TodoList() {
  const dispatch = useDispatch();
  const todosList = useSelector(({ todos }) => todos.todos);
  console.log(todosList);

  const handleClick = (target) => {
    dispatch({ type: "REMOVE_TODO", payload: target.text });
  };

  return (
    <div className="cards p-4">
      {todosList.map((todo) => {
        return (
          <div
            className="card bg-red-400 border-2 border-black rounded-lg p-4"
            key={todo.id}
          >
            <div>{todo.text}</div>
            <p className="text-sm">
              Status: {todo.completed ? "Completed" : "In Progress..."}
            </p>
            <div className="flex justify-between text-xs">
              <div className="bg-indigo-200 rounded-lg p-1 shadow-lg border border-black hover:bg-indigo-100 hover:shadow-md">
                Toggle
              </div>
              <div
                onClick={() => {
                  handleClick(todo);
                }}
                className="bg-indigo-200 rounded-lg p-1 shadow-lg border border-black hover:bg-indigo-100 hover:shadow-md"
              >
                Delete
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
