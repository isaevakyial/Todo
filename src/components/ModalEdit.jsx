import Modal from "./Modal";
import Button from "./Button";
import { useEffect, useState } from "react";

function ModalEdit({ isOpen, onClose, onComplete, todo }) {
  const [text, setText] = useState(todo?.text);

  useEffect(() => {
    setText(todo?.text);
  }, [todo]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3>Edit todo</h3>

      <input
        type="text"
        value={text}
        // className={styles.input}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      />

      <Button onClick={onClose}>Cancel</Button>
      <Button
        onClick={() => {
          onComplete({
            ...todo,
            text,
          });
        }}
      >
        Ok
      </Button>
    </Modal>
  );
}

export default ModalEdit;
