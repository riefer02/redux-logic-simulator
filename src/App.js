import "./App.css";
import TodoSubmit from "./components/TodoSubmit";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container bg-gray-100 text-3xl mx-auto p-2 h-screen">
        <TodoSubmit />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
