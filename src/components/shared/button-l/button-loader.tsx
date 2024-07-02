import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../../../lib/utils/cn";
import { useButtonContext } from "./button.context";

interface IButtonLoaderProps extends ComponentPropsWithRef<"span"> {}

export const ButtonLoader = forwardRef<HTMLSpanElement, IButtonLoaderProps>(
  ({ className, ...rest }: IButtonLoaderProps, ref) => {
    const {isLoading} = useButtonContext();
    if (!isLoading) return null;
    return <span ref={ref} className={cn("button__loader", className)} {...rest} />;
  }
);
