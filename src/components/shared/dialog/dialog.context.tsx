import { PropsWithChildren, useMemo } from "react";
import { Utils } from "../../../lib/utils";
import { IModalProps } from "../modal/modal";
import { useBoolean } from "../../../hooks/use-boolean";

interface IDialogContextValue extends IModalProps {
  onOpen: () => void;
}

const [DialogContext, useDialogContext] = Utils.createContext<IDialogContextValue>();
DialogContext.displayName = "DialogContext";

interface IDialogContextProviderProps extends PropsWithChildren {}

const DialogContextProvider = ({ children }: IDialogContextProviderProps) => {
  const [isOpen, { setFalse, setTrue }] = useBoolean(false);

  const memoizedContextValue: IDialogContextValue = useMemo(
    () => ({ isOpen, onOpen: setTrue, onClose: setFalse }),
    [isOpen, setFalse, setTrue]
  );

  return (
    <DialogContext.Provider value={memoizedContextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContextProvider, useDialogContext };
