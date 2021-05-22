import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);
  return (
    <div>
      {todos.length ? (
        <h2>Add Your Todo List</h2>
      ) : (
        <h2>Your Todo List is Empty</h2>
      )}
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
