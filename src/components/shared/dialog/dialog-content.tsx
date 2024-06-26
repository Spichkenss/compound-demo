import { PropsWithChildren } from "react";
import { Modal } from "../modal";
import { useDialogContext } from "./dialog.context";

interface IDialogContentProps extends PropsWithChildren {}

export const DialogContent = ({ children }: IDialogContentProps) => {
  const { isOpen, onClose } = useDialogContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
};
