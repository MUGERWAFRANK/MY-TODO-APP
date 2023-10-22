/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
import moonICon from "./assets/icon-moon.svg";
import sunICon from "./assets/icon-sun.svg";

import { AddForm } from "./components/AddForm";
import { Item } from "./components/Item";
import { BottomNav } from "./components/BottomNav";
import { GetThemeValues } from "./components/ContextTheme";

export const App = () => {
  const { darkTheme, themeHandler } = GetThemeValues();

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Function to add a new todo
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      complete: false,
    };
    setTodos([newTodo, ...todos]);
  }

  // Function to remove a todo by its ID
  function removeTodoById(id) {
    const todoItems = todos.filter((todo) => todo.id !== id);
    setTodos(todoItems);
  }

  //Funtion to set status
  function toggleTodoCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  }

  // Function to clear all completed todos
  function clearCompletedTodos() {
    const todoItems = todos.filter((todo) => !todo.complete);
    setTodos(todoItems);
  }

  // Function to update the filter value
  function setFilterValue(value) {
    setFilter(value);
  }

  // Function to get the number of todos in a specific filter
  function getTodosCount(filter) {
    if (filter === "all") {
      return todos.length;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.complete).length;
    } else if (filter === "complete") {
      return todos.filter((todo) => todo.complete).length;
    }
    return 0;
  }

  //  Function to renderTodos
  function renderTodos() {
    let filteredTodos = todos;

    if (filter === "active") {
      filteredTodos = todos.filter((todo) => !todo.complete);
    } else if (filter === "complete") {
      filteredTodos = todos.filter((todo) => todo.complete);
    }

    return filteredTodos.map((todo) => (
      <Item
        itemData={todo}
        key={todo.id}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoCompleted}
      />
    ));
  }

  return (
    <div
      className={`${
        darkTheme ? "bg-slate-900" : "bg-[#F2F2F2]"
      } min-h-screen pb-20 relative`}
    >
      <div className="bg-light_header_image_mobile  lg:bg-light_header_image  bg-no-repeat  bg-cover h-52 px-5 lg:px-0 pt-10">
        <div className="flex justify-between lg:w-3/6  lg:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[6px]">
            TODO
          </p>
          <img
            src={darkTheme ? sunICon : moonICon}
            className="h-5"
            onClick={themeHandler}
          />
        </div>
        <div className="mt-8 lg:w-3/6  lg:mx-auto">
          <AddForm addHandler={addTodo} />
        </div>
      </div>
      <div
        className={`${
          darkTheme ? "bg-[#25273D]" : "bg-white"
        } lg:w-3/6 lg:mx-auto  mx-5 relative -top-5  rounded-md`}
      >
        <BottomNav filterType={setFilterValue} />
        {renderTodos()}
        <div className="flex justify-between items-center px-5 h-14 text-sm lg:text-[16px] text-[#9495A5] ">
          {todos.length > 0
            ? `${getTodosCount(filter)} item `
            : `Add new Todo item !!!`}
          {todos.length > 0 && (
            <button
              onClick={clearCompletedTodos}
              type="button"
              className=" focus:font-bold  "
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>
      {/* <div className="fixed bottom-4 w-full lg:flex lg:justify-center"></div> */}
    </div>
  );
};
