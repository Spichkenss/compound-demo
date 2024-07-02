import { useCallback, useState } from "react";

type UseToggleReturnType = [boolean, () => void];

export const useToggle = (initialValue = false): UseToggleReturnType => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle];
};
