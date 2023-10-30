import Modal from "./Modal";
import Button from "./Button";

function ModalDelete({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3>Do you want to delete?</h3>

      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </Modal>
  );
}

export default ModalDelete;