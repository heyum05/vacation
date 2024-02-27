import React, { useState } from "react";
import { Modal } from "./Modal";
import { Problem } from "./Problem";

export const Korean = ({ todos }) => {
  const [idx, setIdx] = useState(0);

  const getProblem = () => {
    return todos[idx].task.meaning;
  }
  const getAnswer = () => {
    return todos[idx].task.word;
  }

  const Answer = "다음 뜻을 가진 단어는?";
  return Problem({ todos, getAnswer, getProblem, Answer, idx, setIdx });
}

