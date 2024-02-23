import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from "./EditTodoForm";

export const Todo = ({ todos, isCompleted, setTodos }) => {
  const SingleTodo = ({ task, isCompleted }) => {
    if (task.completed == isCompleted) {
      return (
        <div className="Todo">
          <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task.word + " - " + task.task.meaning}</p>
          <div>
            <FontAwesomeIcon className="icon" icon={faSquareCheck} onClick={() => toggleComplete(task.id)} />
            <FontAwesomeIcon className="icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
          </div>
        </div>
      );
    }
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return todos.map((todo) =>
    todo.isEditing ? (
      <EditTodoForm editTodo={editTask} task={todo} />
    ) : (
      <SingleTodo
        key={todo.id}
        task={todo}
        isCompleted={isCompleted}
      />
    )
  )
}