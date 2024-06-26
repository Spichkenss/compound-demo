import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../../../lib/utils/cn";

interface IButtonLabelProps extends ComponentPropsWithRef<"span"> {}

export const ButtonLabel = forwardRef<HTMLSpanElement, IButtonLabelProps>(
  ({ className, ...rest }: IButtonLabelProps, ref) => {
    return <span ref={ref} className={cn("button__label", className)} {...rest} />;
  }
);
