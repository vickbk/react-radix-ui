import { Modal } from "@/features/dialog/components/modal";

export const About = () => {
  return (
    <div className="m-auto">
      <Modal>
        let go
        <Modal.Trigger asChild>
          <button className="rounded bg-gray-500 px-4 py-2 text-white">
            Open About Modal <i className="bi bi-info-circle" />
          </button>
        </Modal.Trigger>
        <Modal.Content title="About This App">
          <p className="mb-4">
            This is a simple React application demonstrating the use of Radix UI
            components, including Dialogs and Modals.
          </p>
          <p>
            The "About" modal provides information about the app and its
            features. You can customize this content as needed to provide more
            details or links to documentation.
          </p>
        </Modal.Content>
      </Modal>
    </div>
  );
};
