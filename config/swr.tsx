import React from "react";
import { SWRConfig } from "swr";
import { cacheProvider, fetcher } from "../utils/Swr";
import { AppState } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { showToast } from "../utils/toast";
import { useStore } from "../context";
import { Actions } from "../context/reducer";

const SWR = ({
  children,
  dispatch,
}: {
  children: React.ReactNode;
  dispatch: any;
}) => {
  const [isOnline, setIsOnline] = React.useState<boolean>(false);
  const previousNetworkState = React.useRef<NetInfoState | null>(null);

  const handleLogout = () => {
    dispatch({ type: Actions.LOGOUT });
  };

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable) {
        setIsOnline(true);
      } else {
        setIsOnline(false);
        showToast("No internet connection", "", "error");
      }
      previousNetworkState.current = state;
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SWRConfig
      value={{
        provider: cacheProvider,
        fetcher: fetcher,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        onErrorRetry(err, key, config, revalidate, revalidateOpts) {
          if (key === "/users/me" && err.status >= 401) {
            handleLogout();
          }
        },
        isVisible() {
          return AppState.currentState === "active";
        },
        isOnline() {
          return isOnline;
        },
        initFocus(callback) {
          let appState = AppState.currentState;
          const onAppStateChange = (nextAppState: any) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // Subscribe to the app state change events
          const subscription = AppState.addEventListener(
            "change",
            onAppStateChange
          );

          return () => {
            subscription.remove();
          };
        },
        initReconnect(callback) {
          const unsubscribe = NetInfo.addEventListener((state) => {
            if (
              !previousNetworkState.current?.isConnected &&
              state.isConnected &&
              state.isInternetReachable
            ) {
              callback();
            }
            previousNetworkState.current = state;
          });

          return () => {
            unsubscribe();
          };
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWR;
