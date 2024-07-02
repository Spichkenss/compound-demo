import { forwardRef, PropsWithChildren } from "react";

type ButtonLabelProps = PropsWithChildren;

export const ButtonLabel = forwardRef<HTMLSpanElement, ButtonLabelProps>(
  ({ children }: ButtonLabelProps, ref) => {
    return (
      <span className={"button__label"} ref={ref}>
        {children}
      </span>
    );
  }
);

ButtonLabel.displayName = "ButtonLabel";
