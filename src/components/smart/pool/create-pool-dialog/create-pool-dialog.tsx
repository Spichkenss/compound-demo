import { Dialog, DialogContent, DialogTrigger } from "../../../shared/dialog";
import { CreatePoolDialogTrigger } from "./create-pool-dialog-trigger";

export const CreatePoolDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CreatePoolDialogTrigger />
      </DialogTrigger>
      <DialogContent>Hello, world!</DialogContent>
    </Dialog>
  );
};
