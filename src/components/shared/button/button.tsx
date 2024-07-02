import { type ComponentPropsWithoutRef, forwardRef } from "react";
import cn from "classnames";

import { ButtonPrimitive } from "../Primitive/primitives";

import { buttonVariants, type TButtonVariantsProps } from "./Button.variants";

export type ButtonProps = PrimitiveProps<
  ComponentPropsWithoutRef<"button"> &
    TButtonVariantsProps & {
      isLoading?: boolean;
    }
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, intent, size, shape, isLoading, ...rest }: ButtonProps,
    ref
  ) => {
    return (
      <ButtonPrimitive.Root
        className={cn(buttonVariants({ intent, size, shape }), className)}
        ref={ref}
        data-loading={isLoading}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
