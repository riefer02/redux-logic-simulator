import { useSelector } from "react-redux";
import { todosSelectors } from "../reducers/todos";
import "./TodoList.css";
import Todo from "./Todo";

function TodoList() {
  const allTodos = useSelector(todosSelectors.selectEntities);
  const todosList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todosList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
          color={todoItem.color}
        />
      );
    }
  }

  return <div className="cards p-4">{todosList}</div>;
}

export default TodoList;
