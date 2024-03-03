import React, { useState } from "react";

export const Problem = ({ todos, getAnswer, getProblem, Answer, idx, setIdx }) => {
  const [field, setField] = useState('');

  const handleField = (e) => {
    setField(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  }

  const checkAnswer = () => {
    const ans = getAnswer();
    const submit = field;

    if (submit.toLowerCase() === ans.toLowerCase()) {
      alert('정답입니다!');
    } else {
      alert(`틀렸습니다! 정답은 "${ans}" 입니다.`);
    }

    setIdx(idx + 1);
    setField("");
  }

  if (idx < todos.length) {
    return (
      <div className="TodoWrapper">
        <h1>{idx + 1}번째 문제 : {getProblem()}</h1>
        <br></br>
        <h3>{Answer}</h3>
        <div className="TodoForm">
          <input
            type="text"
            id="submit"
            value={field}
            onChange={handleField}
            onKeyDown={handleKeyDown}
            className="quiz"
          />
          <button onClick={checkAnswer} className="quiz-btn">채점하기</button>
        </div>
      </div>
    );
  } else if (todos.length === 0) {
    return (
      <div className="TodoWrapper">
        <h3>출제할 문제가 없습니다.</h3>
      </div>
    );
  } else {
    return (
      <div className="TodoWrapper">
        <h3>문제를 다 풀었습니다.</h3>
      </div>
    );
  }
} 