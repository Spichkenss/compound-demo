import {
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";

type ButtonIconProps = PropsWithChildren;

export const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIconProps>(
  ({ children }: ButtonIconProps, ref) => {
    return cloneElement(children as ReactElement, {
      className: "button__icon",
      ref,
    });
  }
);

ButtonIcon.displayName = "ButtonIcon";
