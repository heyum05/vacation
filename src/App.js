import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { TodoWrapper } from './components/TodoWrapper';
import { Memorized } from "./components/Memorized";
import { English } from "./components/English";
import { Korean } from "./components/Korean";
import { shuffleArray } from "./components/util";
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(window.localStorage.getItem("todos")) || []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <div className="bar">
        <Link className="navbtn" to="/">
          암기 중인 단어
        </Link>
        <Link className="navbtn" to="/memorized">
          암기 완료된 단어
        </Link>
        <Link className="navbtn" to="/english">
          뜻 맞추기
        </Link>
        <Link className="navbtn" to="/korean">
          단어 맞추기
        </Link>
      </div>
      <Routes>
        <Route path="/" element={
          <div>
            <header className="title">나만의 단어 암기장</header>
            <TodoWrapper
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        } />

        <Route path="/memorized" element={<Memorized
          todos={todos}
          setTodos={setTodos}
        />} />

        <Route path="/english" element={<English
          todos={shuffleArray(todos)}
        />} />

        <Route path="/korean" element={<Korean
          todos={shuffleArray(todos)}
        />} />

        <Route path="test" element={
          <div>
            HelloWOrld
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;