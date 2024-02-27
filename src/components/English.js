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
  const Answer = "위 단어의 뜻은?";
  return Problem({ todos, getAnswer, getProblem, Answer, idx, setIdx });
}

