import { Fragment, PropsWithChildren } from "react";
import { DialogContextProvider } from "./dialog.context";

interface IDialogProps extends PropsWithChildren {}

export const Dialog = ({ children }: IDialogProps) => {
  return (
    <DialogContextProvider >
      <Fragment>{children}</Fragment>
    </DialogContextProvider>
  );
};
