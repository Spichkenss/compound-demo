import { ComponentPropsWithoutRef, forwardRef } from "react";


import { useAccordionContext } from "./Accordion.context";
import { cn } from "../../../lib/utils/cn";

type IAccordionContentProps = ComponentPropsWithoutRef<"div">;

export const AccordionContent = forwardRef<
  HTMLDivElement,
  IAccordionContentProps
>(({ children, className, ...rest }: IAccordionContentProps, ref) => {
  const { isOpen } = useAccordionContext();

  return (
    <div
      className={cn("accordion__content", className)}
      ref={ref}
      data-open={isOpen}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
});

AccordionContent.displayName = "AccordionContent";
