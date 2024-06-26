import { ComponentPropsWithoutRef, forwardRef } from "react";
import { ButtonContextProvider, IButtonContextValue } from "./button.context";
import { cn } from "../../../lib/utils/cn";
import "./button.css";

interface IButtonProps extends ComponentPropsWithoutRef<"button">, IButtonContextValue {}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ isLoading, className, ...rest }: IButtonProps, ref) => {
    return (
      <ButtonContextProvider isLoading={isLoading}>
        <button className={cn("button", className)} ref={ref} {...rest} />
      </ButtonContextProvider>
    );
  }
);
