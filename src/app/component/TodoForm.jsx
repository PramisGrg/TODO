"use client";
import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  const handleChange = (e) => {
    setInput(e.target.value);

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className=" border border-black"
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          onChange={handleChange}
        ></input>
        <button type="submit" className="">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
