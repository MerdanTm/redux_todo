import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";

function TodoInput() {
  const [name, setName] = useState();
  let dispatch = useDispatch();

  return (
    <div class="input-group mb-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        class="col form-control m-1"
        type="text"
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              name: name,
            })
          );
          setName("");
        }}
        class="btn btn-primary m-1"
        type="button"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
