import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../reducers/todos";

const Todo = ({ text, completed, id, color }) => {
  const dispatch = useDispatch();

  const toggle = (id) => {
    // toggle todo...
  };

  const deleteItem = (id) => {
    // delete todo...
  };
  return (
    <div className="card bg-red-400 border-2 border-black rounded-lg p-4">
      <div className="flex justify-between">
        <div>{text}</div>
        <span
          className="rounded-full h-3 w-3 bg-white border-black border"
          style={{ backgroundColor: color }}
        ></span>
      </div>
      <p className="text-sm">
        Status: {completed ? "Completed" : "In Progress..."}
      </p>
      <div className="flex justify-between text-xs pt-2">
        <div
          onClick={() => {
            toggle(id);
          }}
          className="cursor-pointer bg-indigo-200 rounded-lg p-1 shadow-lg border border-black hover:bg-indigo-100 hover:shadow-md"
        >
          Toggle
        </div>
        <div
          onClick={() => {
            deleteItem(id);
          }}
          className="cursor-pointer bg-indigo-200 rounded-lg p-1 shadow-lg border border-black hover:bg-indigo-100 hover:shadow-md"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Todo;
