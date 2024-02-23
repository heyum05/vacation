import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { TodoWrapper } from './components/TodoWrapper';
import { Memorized } from "./components/Memorized";
import { English } from "./components/English";
import { Korean } from "./components/Korean";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [generateQuiz, generateMeaningQuiz] = useState();

  return (
    <BrowserRouter>
      <div className="bar">
        <Link className="navbtn" to="/">
          현재 암기중인 단어
        </Link>
        <Link className="navbtn" to="/memorized">
          암기 완료된 단어
        </Link>
        <header>영단어 암기장</header>
        <Link className="navbtn" to="/english">
          영단어 퀴즈 출제
        </Link>
        <Link className="navbtn" to="/korean">
          뜻 퀴즈 출제
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<TodoWrapper
          todos={todos}
          setTodos={setTodos}
        />} />
        <Route path="/memorized" element={<Memorized
          todos={todos}
          setTodos={setTodos}
        />} />

        <Route path="/english" element={<English
          todos={todos}
          setTodos={setTodos}
        />} />

        <Route path="/korean" element={<Korean
          todos={todos}
          setTodos={setTodos}
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