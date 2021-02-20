import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodo } from "../reducers/todos";
import { nanoid } from "@reduxjs/toolkit";
import { clearTodo } from "../reducers/todos";

function App() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ text }) => {
    if (text.length > 0) {
      reset();
      dispatch(
        addTodo({
          id: nanoid(),
          text: text,
          completed: false,
          color: "orangered",
        })
      );
    }
  };

  const clearTodos = () => {
    dispatch(clearTodo());
  };

  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit(onSubmit)} className="text-lg p-4">
        <label>New Todo</label>
        <input
          type="text"
          name="text"
          ref={register}
          className="bg-white border rounded-lg mx-2 p-1"
        />
        <button
          className="bg-indigo-200 shadow-sm rounded-lg p-1 hover:bg-indigo-100 hover:shadow-none"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="flex items-center text-lg pr-2">
        <button
          onClick={() => {
            clearTodos();
          }}
          className="bg-indigo-200 shadow-sm rounded-lg p-1 hover:bg-indigo-100 hover:shadow-none"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
