import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }
    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
};
