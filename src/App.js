import { useSelector } from "react-redux";
import TodoSubmit from "./components/TodoSubmit";
import TodoList from "./components/TodoList";
import { todosSelectors } from "./reducers/todos";
import "./App.css";

function App() {
  const totalTodos = useSelector(todosSelectors.selectTotal);
  return (
    <div className="App">
      <div className="container text-xl mx-auto md:p-2 h-full md:pt-10 divide-y-2 ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl pl-3">Todo List</h1>
          <div className="pr-2">Task Remaining: {totalTodos}</div>
        </div>
        <TodoSubmit />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
