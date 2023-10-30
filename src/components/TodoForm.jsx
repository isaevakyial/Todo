import React, { useState } from "react";
import styles from "./TodoForm.module.css";

export const TodoForm = ({ onAddTodo }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    onAddTodo(enteredValue);
    setEnteredValue("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredValue}
        className={styles.input}
        onChange={(e) => setEnteredValue(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
};
