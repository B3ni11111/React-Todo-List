import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./components/todoList";
import TodoItem from "./components/TodoItem";
import NavBar from "./components/NavBar";

const list = [
  { id: 1, text: "buy a mouse", completed: true },
  { id: 2, text: "buy water", completed: true },
  { id: 3, text: "buy a keyboard", completed: false },
];
function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
    
      <TodoList data={list} />
      {/* <TodoItem /> */}
      {/* <SingleTodo list={list} /> */}
    </>
  );
}

export default App;
