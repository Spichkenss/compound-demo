import { cva, type VariantProps } from "src/utils/styling/cva";
import "./Button.scss";

export const buttonVariants = cva("button", {
  variants: {
    intent: {
      primary: "intent__primary",
      secondary: "intent__secondary",
      outline: "intent__outline",
      ghost: "intent__ghost",
      uncontained: "intent__uncontained",
    },
    size: {
      sm: "size__small",
      md: "size__medium",
      lg: "size__large",
    },
    shape: {
      rect: "shape__rect",
      square: "shape__square",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
    shape: "rect",
  },
});

export type TButtonVariants = typeof buttonVariants;
export type TButtonVariantsProps = VariantProps<TButtonVariants>;
