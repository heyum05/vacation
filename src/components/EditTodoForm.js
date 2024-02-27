import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
  const [word, setWord] = useState(task.task.word);
  const [meaning, setMeaning] = useState(task.task.meaning);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({ word, meaning }, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm" style={{ width: '100%' }}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="todo-input"
        placeholder='영단어'
        style={{ width: 'calc(50% - 40px)', marginRight: '10px' }}
      />
      <input
        type="text"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        className="todo-input"
        placeholder='뜻'
        style={{ width: 'calc(50% - 40px)' }}
      />
      <button type="submit" className='todo-btn'>완료</button>
    </form>
  );
};