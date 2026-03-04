import { Modal } from "./modal";
export const PopupLogin = () => {
  return (
    <>
      <Modal>
        <Modal.Trigger className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Open Login Popup
        </Modal.Trigger>
        <Modal.Content title="Login">
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
              <Modal.Close className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400">
                Cancel
              </Modal.Close>
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Login
              </button>
            </footer>
          </form>
        </Modal.Content>
      </Modal>
    </>
  );
};
