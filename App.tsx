import "react-native-gesture-handler";
import Routes from "./routes";
import { SelectModelAndBrandProvider } from "./src/contexts/contextBrandAndModel";
import { IsLoadingProvider } from "./src/contexts/contextIsLoading";
import { useState } from "react";
import { Splash } from "./src/screens/splash/splash";
import { preventAutoHideAsync } from "expo-splash-screen";

// preventAutoHideAsync();

export default function App() {
  return (
    <SelectModelAndBrandProvider>
      <IsLoadingProvider>
        <Routes />
      </IsLoadingProvider>
    </SelectModelAndBrandProvider>
  );

  // const [splashComplete, setSplashComplete] = useState<boolean>(false);
  // return splashComplete ? (
  //   <SelectModelAndBrandProvider>
  //     <IsLoadingProvider>
  //       <Routes />
  //     </IsLoadingProvider>
  //   </SelectModelAndBrandProvider>
  // ) : (
  //   <Splash onComplete={setSplashComplete} />
  // );
}
