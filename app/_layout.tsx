import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GlobalStore } from "../context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { SplashScreen } from "expo-router";
import { useStore } from "../hooks";

const Layout = () => {
  return (
    <>
      <StatusBar translucent={true} animated={true} />
      <GlobalStore>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <MainLayout />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </GlobalStore>
    </>
  );
};

const MainLayout = () => {
  const { state } = useStore();

  if (!state.fonts_loaded) {
    return <SplashScreen />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "simple_push",
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    />
  );
};

export default Layout;
