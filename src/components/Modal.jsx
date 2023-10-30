import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.backdrop} />
      <div className={styles.container}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
