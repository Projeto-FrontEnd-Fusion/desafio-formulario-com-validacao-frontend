import { MobileContainer } from "./components/MobileContainer";
import { DesktopContainer } from "./components/DesktopContainer";

export const App = () => {
  return(
    <main className="w-screen h-full lg:h-screen bg-[url(/assets/images/background-image.png)] bg-no-repeat lg:bg-none py-22 lg:bg-darkblue flex flex-col items-center">
      <MobileContainer />
      <DesktopContainer />
    </main>
  );
}