import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [name, setName] = useState(todo.name);
  const [editable, setEditable] = useState(false);
  return (
    <div>
      <div class="input-group mb-3">
        <div class="col">
          {editable ? (
            <input
              type="text"
              class="form-control m-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
          class="btn btn-primary m-1"
          type="button"
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          class="btn btn-danger m-1"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
