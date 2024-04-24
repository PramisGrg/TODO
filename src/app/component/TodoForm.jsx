import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black"
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
