import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, restoreTodo } from "../reducers/todos";
import "./TodoList.css";
import Todo from "./Todo";

function TodoList() {
  const dispatch = useDispatch();
  const allTodos = useSelector(todosSelectors.selectEntities);
  const deletedTodos = useSelector((state) => state.todos.deletedTodos);
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

  const restore = (todo) => {
    dispatch(restoreTodo(todo));
  };

  const deletedList = deletedTodos.map((item) => (
    <div key={item.id}>
      <span>{item.text}</span>
      <button className="ml-1" onClick={() => restore(item)}>
        &#9745;
      </button>
    </div>
  ));

  return (
    <div class="flex flex-col flex-grow h-full justify-between">
      <div className="cards p-4">{todosList}</div>
      <div className="flex flex-col p-4 absolute bottom-0">
        <div className="">Deleted Todos:</div>
        <div className="text-sm">{deletedList}</div>
      </div>
    </div>
  );
}

export default TodoList;
