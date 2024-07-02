import { ComponentPropsWithoutRef, forwardRef } from "react";
import "./Accordion.scss";

import { AccordionContextProvider } from "./Accordion.context";
import { cn } from "../../../lib/utils/cn";

export type IAccordionProps = ComponentPropsWithoutRef<"div">;

export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  ({ children, className, ...rest }: IAccordionProps, ref) => {
    return (
      <AccordionContextProvider>
        <div className={cn("accordion", className)} ref={ref} {...rest}>
          {children}
        </div>
      </AccordionContextProvider>
    );
  }
);

Accordion.displayName = "Accordion";
