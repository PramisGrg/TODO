"use client";
import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todos.id == id) {
        todoIsComplete = !todoIsComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos.filter((todo) => todo.id != id)];
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id == todoId ? newValue : item))
    );
  };

  return (
    <div className="bg-[#7c78e8] flex flex-col items-center h-screen">
      <div className="bg-[#000000] m-20 h-screen p-10 rounded-2xl">
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
