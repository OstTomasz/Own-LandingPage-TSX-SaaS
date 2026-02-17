import { Dialog, DialogPanel } from "@headlessui/react";
import { type ReactNode } from "react";
import styles from "./Modal.module.scss";
import { CloseButton } from "../CloseBtn/CloseBtn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className={styles.modalRoot}
      unmount={false}
    >
      <div className={styles.backdrop} />
      <div className={styles.wrapper}>
        <DialogPanel transition className={styles.modalContent}>
          <CloseButton onClick={onClose} className={styles.closeBtn} />
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
