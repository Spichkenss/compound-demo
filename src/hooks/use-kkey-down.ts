import { useCallback } from "react";
import { useEventListener } from "./use-event-listener";

interface UseKeyDownProps {
  key: string;
  condition: boolean;
  callback: () => void;
}

export const useKeyDown = ({ key, callback, condition }: UseKeyDownProps) => {
  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!condition) return;
      if (event.key === key) {
        callback();
      }
    },
    [callback, key, condition]
  );

  useEventListener("keydown", onKeyPress);

  return null;
};
