import * as Dialog from "@radix-ui/react-dialog";
export const PopupLogin = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Open Login Popup
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 min-w-75 max-w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow-lg">
            <header className="flex justify-between items-center gap-8">
              <Dialog.Title className="text-lg font-bold">Login</Dialog.Title>
              <Dialog.Close className=" text-gray-500 hover:text-gray-700">
                <i className="bi bi-x-lg"></i>
              </Dialog.Close>
            </header>
            <form className="grid gap-4">
              <fieldset>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </label>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </label>
              </fieldset>
              <footer className="flex justify-end gap-4">
                <Dialog.DialogClose className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400">
                  Cancel
                </Dialog.DialogClose>
                <button
                  type="submit"
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Login
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
