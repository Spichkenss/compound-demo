import { cloneElement, ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from "react";
import { useDialogContext } from "./dialog.context";

interface IDialogTriggerProps extends PropsWithChildren {}

export const DialogTrigger = ({ children }: IDialogTriggerProps) => {
  const { onOpen } = useDialogContext();
  return cloneElement(children as ReactElement<ComponentPropsWithoutRef<"button">>, {
    onClick: onOpen,
  });
};
