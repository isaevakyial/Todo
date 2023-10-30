import React from "react";
import Button from "./Button";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";
const TodoActions = ({
  resetTodosHandler,
  deleteCompletedTodosHandler, //для удаления завершенных задач
  isExistingCompletedTodo, // для определения завершенных задач
}) => {
  return (
    <div>
      <Button onClick={resetTodosHandler}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodosHandler}
        disabled={!isExistingCompletedTodo} // отключение кнопки, если нет завершенных задач
      >
        <RiDeleteBack2Line />
      </Button>
    </div>
  );
};
export default TodoActions;
