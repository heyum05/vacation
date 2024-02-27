import React, { useState } from "react";
import { Modal } from "./Modal";
import { Problem } from "./Problem";

export const English = ({ todos }) => {
  const [idx, setIdx] = useState(0);

  const getProblem = () => {
    return todos[idx].task.word;
  }
  const getAnswer = () => {
    return todos[idx].task.meaning;
  }
  const Answer = "이라는 뜻을 가진 영단어는?";
  return Problem({ todos, getAnswer, getProblem, Answer, idx, setIdx });
}

