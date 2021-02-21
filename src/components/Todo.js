import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../reducers/todos";

const Todo = ({ text, completed, id, color }) => {
  const dispatch = useDispatch();

  const toggle = (id) => {
    dispatch(
      updateTodo({
        id,
        changes: { completed: !completed },
      })
    );
  };

  const deleteItem = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="card bg-gray-100 border-opacity-50 border border-black rounded-lg p-2 md:p-4">
      <div className="flex justify-between">
        <div className="truncate bg-black text-green-100 border border-gray-500 shadow-sm px-3 py-3 rounded-lg flex-grow ">
          <div className="subpixel-antialiased">{text}</div>
          <p className="text-sm">
            Status: {completed ? "Completed" : "In Progress..."}
          </p>
        </div>
        <div className="flex justify-center pl-4 p-1">
          <span
            className="relative rounded-full h-3 w-3 bg-white border-black border"
            style={{ backgroundColor: color }}
          ></span>
        </div>
      </div>
      <div className="flex justify-between text-xs pt-2">
        <div
          onClick={() => {
            toggle(id);
          }}
          className="cursor-pointer bg-indigo-200 rounded-lg p-1 shadow-lg border-opacity-50 border border-black hover:bg-indigo-100 hover:shadow-md"
        >
          Toggle
        </div>
        <div
          onClick={() => {
            deleteItem(id);
          }}
          className="cursor-pointer bg-indigo-200 rounded-lg p-1 shadow-lg border-opacity-50 border border-black hover:bg-indigo-100 hover:shadow-md"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Todo;
