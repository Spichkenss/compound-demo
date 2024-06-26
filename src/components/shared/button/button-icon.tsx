import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../../../lib/utils/cn";

interface IButtonIconProps extends ComponentPropsWithRef<"span"> {}

export const ButtonIcon = forwardRef<HTMLSpanElement, IButtonIconProps>(
  ({ className, ...rest }: IButtonIconProps, ref) => {
    return <span ref={ref} className={cn("button__icon", className)} {...rest} />;
  }
);
