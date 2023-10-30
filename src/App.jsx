import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import TodoActions from "./components/TodoAction";
import uuid from "react-uuid";
import ModalDelete from "./components/ModalDelete";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editingTodoId, setEditingTodoId] = useState(null);

  const getDate = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formatDate = `${day}/${month}/${year}  - ${hour}:${minute}`;
    return formatDate;
  };

  const editingTodo = todos.find((todo) => todo.id === editingTodoId);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuid(),
      date: getDate()
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const editTodoHandler = (newTodo) => {
    const todoIndex = todos.findIndex((todo) => todo.id === newTodo.id);
    const newTodos = [...todos];
    newTodos[todoIndex] = {
      ...newTodo,
    };
    console.log("debug", newTodos);

    setTodos(newTodos);
    closeEditModal();
  };

  const editTodoClickHandler = (id) => {
    setIsEditModalOpen(true);
    setEditingTodoId(id);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingTodoId(null);
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const handleDeleteCompletedTodos = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setTodos(todos.filter((item) => !item.isCompleted));
    closeDeleteModal();
  };

  console.log(isDeleteModalOpen);

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm onAddTodo={addTodoHandler} />
        {!!todos.length && (
          <TodoActions
            resetTodosHandler={resetTodosHandler}
            deleteCompletedTodosHandler={handleDeleteCompletedTodos}
            isExistingCompletedTodo={!!completedTodosCount}
          />
        )}
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodoHandler}
          onToggle={toggleTodoHandler}
          onEditClick={editTodoClickHandler}
        />

        {completedTodosCount > 0 && (
          <h2>
            You have to completed {completedTodosCount}{" "}
            {completedTodosCount > 1 ? "todos" : "todo"}
          </h2>
        )}

        <ModalDelete
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={handleConfirmDelete}
        />

        <ModalEdit
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onComplete={editTodoHandler}
          todo={editingTodo}
        />
      </div>
    </>
  );
}

export default App;
