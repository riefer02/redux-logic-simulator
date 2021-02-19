import TodoSubmit from "./components/TodoSubmit";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container bg-gray-100 text-xl mx-auto p-2 h-screen pt-10 divide-y-2 ">
        <h1 className="text-3xl">Todo List</h1>
        <TodoSubmit />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
