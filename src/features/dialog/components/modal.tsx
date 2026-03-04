import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  Root as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return <DialogRoot>{children}</DialogRoot>;
};

export const ModalContent = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <DialogPortal>
      <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
      <DialogContent className="fixed top-1/2 left-1/2 min-w-75 max-w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow-lg">
        <header className="flex justify-between items-center gap-8">
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <DialogClose className=" text-gray-500 hover:text-gray-700">
            <i className="bi bi-x-lg"></i>
          </DialogClose>
        </header>
        {children}
      </DialogContent>
    </DialogPortal>
  );
};

Modal.Trigger = DialogTrigger;
Modal.Content = ModalContent;
Modal.Close = DialogClose;
Modal.Overlay = DialogOverlay;

export const ModalTrigger = Modal.Trigger;
