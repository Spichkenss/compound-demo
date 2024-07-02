import { Dialog, DialogContent, DialogTrigger } from "../../../shared/dialog";
import { CreatePoolDialogTrigger } from "./create-pool-dialog-trigger";
import { CreatePoolDialogContent } from "./create-pool-dialot-content";

export const CreatePoolDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CreatePoolDialogTrigger />
      </DialogTrigger>
      <DialogContent>
        <CreatePoolDialogContent />
      </DialogContent>
    </Dialog>
  );
};
