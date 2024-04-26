import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => {
    return (
      <div
        className="mt-4 flex text-white m-4 bg-blue-500 p-4 rounded-sm text-xl"
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div>
          <div className="flex ml-4 mt-1 gap-2">
            <MdDelete onClick={() => removeTodo(todo.id)} />
            <FaEdit
              onClick={() => setEdit({ id: todo.id, vlaue: todo.text })}
            />
          </div>
        </div>
      </div>
    );
  });
};

export default Todo;
