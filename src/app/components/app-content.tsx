import { About } from "@/features/about/components/about";
import { PopupLogin } from "@/features/dialog/components/popup-login";

export const AppContent = () => {
  return (
    <main className="m-auto">
      <h1 className="text-3xl font-semibold">Welcome to the Radix Trial!</h1>
      <PopupLogin />
      <About />
    </main>
  );
};
