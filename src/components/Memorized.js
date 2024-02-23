import React from "react";
import { Todo } from "./Todo";

export const Memorized = ({todos,setTodos}) => {
  return (
    <div className="TodoWrapper">
      <h1>암기 완료된 단어</h1>
      
      <Todo
        todos={todos}
        isCompleted={true}
        setTodos={setTodos}
      />
    </div>
  );
};