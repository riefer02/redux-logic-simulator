import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";
function TodoList() {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state);

  const handleClick = (target) => {
    dispatch({ type: "REMOVE_TODO", payload: target });
  };

  return (
    <div className="cards">
      {todosList.map((todo) => {
        return (
          <div
            className="card bg-red-400 border-2 border-black rounded-lg p-4"
            key={todo}
            onClick={() => {
              handleClick(todo);
            }}
          >
            {todo}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
