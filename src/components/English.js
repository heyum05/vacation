import React, { useState } from "react";
import { shuffleArray } from "./util";
import { Modal } from "./Modal";

let idx = 0; // 몇번째 문제인지?
let problem = [];

export const English = ({ todos, setTodos }) => {
    const [field, setField] = useState('');
    const [problem, setProblem] = useState([]);
    const handleField = (e) => {
      setField(e.target.value);
    }

    setProblem(shuffleArray(todos));

    const getProblem = () => {
      return problem[idx].word;
    }
    const getAnswer = () => {
      return problem[idx].meaning;
    }

    const getSubmit = () => {
      alert(document.getElementById("submit").value);
      return document.getElementById("submit").value;
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
    }

    const generateQuiz = () => {
        if (todos.length > 0) {
          for (const todo of shuffleArray(todos)) {
            const { task } = todo;
            const { word, meaning } = task;
    
            const answer = prompt(`${word}의 뜻은? (퀴즈를 중단하려면 취소 버튼을 누르세요)`);
          }
        } else {
          
        }
    };

   
    
  return (
    <div className="TodoWrapper">
      <h1>{getProblem()}</h1>
      <h3>이라는 뜻을 가진 영단어는?</h3>
      <form>
        
        <input type="text" id="submit" value={field} onChange={handleField}></input>
        <button onClick={checkAnswer}>제출하기</button>
      </form>
    </div>
  );
}

