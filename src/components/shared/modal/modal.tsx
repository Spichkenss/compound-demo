import {PropsWithChildren, useCallback, useRef} from "react";
import "./modal.css";
import { useKeyDown } from "../../../hooks/use-kkey-down";
import { useClickOutside } from "../../../hooks/use-click-outside";
import { Lazy } from "../lazy";
import { Portal } from "../portal";


export interface IModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({children, isOpen, onClose}: IModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback(() => onClose?.(), [onClose]);

  useKeyDown({key: "Escape", callback: handleClose, condition: isOpen});
  useClickOutside({ref, condition: isOpen, callback: handleClose});

  return (
    <Lazy condition={isOpen}>
      <Portal>
        <div className={'modal'} data-state={isOpen ? 'opened' : 'closed'}>
          <div className={'overlay'}>
            <div className={'content'} ref={ref}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    </Lazy>
  )
}
