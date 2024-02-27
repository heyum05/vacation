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

  const Answer = "뜻이 위와 같은 단어는?";
  return Problem({ todos, getAnswer, getProblem, Answer, idx, setIdx });
}

