import { forwardRef } from "react";
import cn from "classnames";

import { Loader, TLoaderVariantProps } from "../Loader";

export type ButtonLoaderProps = {
  color: TLoaderVariantProps["color"];
  className?: string;
};

export const ButtonLoader = forwardRef<HTMLSpanElement, ButtonLoaderProps>(
  ({ color, className }: ButtonLoaderProps, ref) => {
    return (
      <Loader
        size={"sm"}
        color={color}
        ref={ref}
        className={cn("button__loader", className)}
      />
    );
  }
);

ButtonLoader.displayName = "ButtonLoader";
