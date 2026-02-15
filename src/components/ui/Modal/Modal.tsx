import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { CloseButton } from "../CloseBtn/CloseBtn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.modalRoot} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={styles.transition}
          enterFrom={styles.opacity0}
          enterTo={styles.opacity100}
          leave={styles.transition}
          leaveFrom={styles.opacity100}
          leaveTo={styles.opacity0}
        >
          <div className={styles.backdrop} />
        </TransitionChild>

        <div className={styles.wrapper}>
          <TransitionChild
            as={Fragment}
            enter={styles.easeOut}
            enterFrom={styles.scale95}
            enterTo={styles.scale100}
            leave={styles.easeIn}
            leaveFrom={styles.scale100}
            leaveTo={styles.scale95}
          >
            <DialogPanel className={styles.modalContent}>
              <CloseButton onClick={onClose} />
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
