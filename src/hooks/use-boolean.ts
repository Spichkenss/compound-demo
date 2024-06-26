import { useCallback, useState } from "react";

export const useBoolean = (initialState = false): [
  boolean,
  { setTrue: () => void; setFalse: () => void; toggle: () => void }
] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const setTrue = useCallback(() => setIsOpen(true), []);
  const setFalse = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return [isOpen, { setTrue, setFalse, toggle }];
};
