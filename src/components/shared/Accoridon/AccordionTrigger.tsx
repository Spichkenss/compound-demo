import { ComponentPropsWithoutRef, forwardRef } from "react";

import { useAccordionContext } from "./Accordion.context";
import { cn } from "../../../lib/utils/cn";

type IAccordionTriggerProps = ComponentPropsWithoutRef<"button">;

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  IAccordionTriggerProps
>(({ children, className, ...rest }: IAccordionTriggerProps, ref) => {
  const { toggleIsOpen } = useAccordionContext();

  return (
    <button
      onClick={toggleIsOpen}
      className={cn("accordion__trigger", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";
