import React, { useState } from "react";

export const Problem = ({ todos, getAnswer, getProblem, Answer, idx, setIdx }) => {
  const [field, setField] = useState('');

  const handleField = (e) => {
    setField(e.target.value);
  }

  const checkAnswer = () => {
    const ans = getAnswer();
    const submit = field;

    if (submit === null) {
      // 사용자가 취소 버튼을 눌렀을 때
      alert('퀴즈 출제가 중단되었습니다.');
    }
    if (submit.toLowerCase() === ans.toLowerCase()) {
      alert('정답입니다!');
    } else {
      alert(`틀렸습니다! 정답은 "${ans}" 입니다.`);
    }

    setIdx(idx + 1);
    setField("");
  }

  if(idx < todos.length){
    return (
      <div className="TodoWrapper">
        <h1>{idx+1}번째 문제 : {getProblem()}</h1>
        <h3>{Answer}</h3>
        <input type="text" id="submit" value={field} onChange={handleField}></input>
        <button onClick={checkAnswer}>제출하기</button>
      </div>
    );
  }
  else if(todos.length == 0){
    return (
        <div className="TodoWrapper">
          <h3>낼수 있는 문제가 없습니다!</h3>
        </div>
      );
  }
  else{
    return (
      <div className="TodoWrapper">
        <h3>문제를 다 푸셨습니다!</h3>
      </div>
    );
  }
}

