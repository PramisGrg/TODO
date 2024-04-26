import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
    <div className="">
      <h1 className="text-4xl m-4 text-white">What's your plan for Today</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="border border-black rounded-md p-1.5 w-full"
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            className="ml-2 p-1.5 text-white bg-[#7271d2] rounded-md hover:bg-purple-400"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
