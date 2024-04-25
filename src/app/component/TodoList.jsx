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
    <div>
      <h1>What's your plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
