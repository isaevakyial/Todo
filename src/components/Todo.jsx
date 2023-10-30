import React from "react";
import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBack2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

export const Todo = ({ todo, onDeletTodo, onEditClick, onToggle, onPencil }) => {
  return (
    <div
      className={`${styles.todo} ${todo.isCompleted && styles.CompletedTodo}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div>{todo.text}</div>
      <p>{todo.date.toString()}</p>
      <RiDeleteBack2Line
        className={styles.deleteIcon}
        onClick={() => onDeletTodo(todo.id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => onToggle(todo.id)} />

      <RiPencilFill
        className={styles.pencilIcon}
        onClick={() => onEditClick(todo.id)}
      />
    </div>
  );
};

export default Todo;
