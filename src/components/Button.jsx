import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
const { children, title, onClick, disabled = false,...rest }= props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button