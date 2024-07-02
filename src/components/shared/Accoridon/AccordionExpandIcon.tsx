import { ComponentPropsWithoutRef, forwardRef } from "react";

import { useAccordionContext } from "./Accordion.context";
import { cn } from "../../../lib/utils/cn";

interface IAccordionExpandIconProps extends ComponentPropsWithoutRef<"span"> {
  rotationOpened?: number;
  rotationClosed?: number;
}

export const AccordionExpandIcon = forwardRef<
  HTMLSpanElement,
  IAccordionExpandIconProps
>(
  (
    {
      className,
      rotationOpened = 0,
      rotationClosed = 180,
      ...rest
    }: IAccordionExpandIconProps,
    ref
  ) => {
    const { isOpen } = useAccordionContext();

    return (
      <span
        className={cn("accordion__expand__icon", className)}
        style={{ rotate: `${isOpen ? rotationOpened : rotationClosed}deg` }}
        ref={ref}
        {...rest}
      />
    );
  }
);

AccordionExpandIcon.displayName = "AccordionExpandIcon";
