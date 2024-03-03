import React, { useState } from "react";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = ({ todos, setTodos }) => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleMeaningChange = (e) => {
    setMeaning(e.target.value);
  };

  const saveWordAndMeaning = () => {
    // 단어와 뜻을 저장
    if (word.trim() !== '' && meaning.trim() !== '') {
      addTodo({ word: word, meaning: meaning })
      // 저장 후 입력 값 초기화
      setWord('');
      setMeaning('');
    }
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.id === 'wordInput') {
        document.getElementById('meaningInput').focus(); // 뜻 입력 칸으로 포커스 이동
      } else if (e.target.id === 'meaningInput') {
        saveWordAndMeaning();
        document.getElementById('wordInput').focus(); // 영단어 입력 칸으로 포커스 이동
      }
    }
  };

  return (
    <div className="TodoWrapper">

      <div className="TodoForm">
        <div className="todo-box">
          <input
            id="wordInput"
            className="todo-input"
            type="text"
            value={word}
            onChange={handleWordChange}
            onKeyDown={handleKeyDown} // handleKeyDown 적용
            placeholder="단어 입력"
            lang="en"
          />
          <input
            className="todo-input"
            type="text"
            value={meaning}
            onChange={handleMeaningChange}
            onKeyDown={handleKeyDown} // handleKeyDown 적용
            id="meaningInput"
            placeholder="뜻 입력"
            lang="ko"
          />
        </div>
        <button className='todo-btn' onClick={saveWordAndMeaning}>추가</button>
      </div>

      <Todo
        todos={todos}
        setTodos={setTodos}
        isCompleted={false}
      />
    </div>
  );
};