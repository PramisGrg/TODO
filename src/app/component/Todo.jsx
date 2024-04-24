import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = ({ todos, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => {
    return (
      <div key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div>
          <MdDelete />
          <FaEdit />
        </div>
      </div>
    );
  });
};

export default Todo;
