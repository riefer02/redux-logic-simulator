import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodo } from "../reducers/todos";
import { nanoid } from "@reduxjs/toolkit";

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

  return (
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
  );
}

export default App;
