import { ComponentPropsWithoutRef } from "react";
import { Button, ButtonIcon, ButtonLabel } from "../../../shared/button";

export const CreatePoolDialogTrigger = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <Button {...props}>
      <ButtonIcon>+</ButtonIcon>
      <ButtonLabel>Create</ButtonLabel>
    </Button>
  );
};
