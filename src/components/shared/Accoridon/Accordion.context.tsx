import { PropsWithChildren, useMemo } from "react";
import { Utils } from "../../../lib/utils";
import { useToggle } from "../../../hooks/useToggle";

interface IAccordionContextValue {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const [AccordionContext, useAccordionContext] =
  Utils.createContext<IAccordionContextValue>();

AccordionContext.displayName = "AccordionContext";

export interface IAccordionContextProviderProps extends PropsWithChildren {
  initialOpen?: boolean;
}

export const AccordionContextProvider = ({
  children,
  initialOpen = false,
}: IAccordionContextProviderProps) => {
  const [isOpen, toggleIsOpen] = useToggle(initialOpen);

  const memoizedContextValue: IAccordionContextValue = useMemo(
    () => ({ isOpen, toggleIsOpen }),
    [isOpen, toggleIsOpen]
  );

  return (
    <AccordionContext.Provider value={memoizedContextValue}>{children}</AccordionContext.Provider>
  );
};
