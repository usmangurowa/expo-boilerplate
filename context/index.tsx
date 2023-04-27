import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import reducer, { Actions } from "./reducer";

import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/manrope";

import * as SplashScreen from "expo-splash-screen";
import SWR from "../config/swr";
import useProtectedRoute from "../hooks/use-protected-routes";
import { handleGetToken } from "../utils";
import { AnimatedSplash, Loading } from "../components";

const initialState: InitialStateProps = {
  is_authenticated: false,
  user: null,
  fonts_loaded: false,
  is_app_ready: false,
  is_ui_loading: false,
};

// SplashScreen.preventAutoHideAsync();

export const appStoreContext = createContext<{
  state: InitialStateProps;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const GlobalStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useProtectedRoute(state);

  const [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      dispatch({ type: Actions.FONTSLOADED });
      // SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  React.useEffect(() => {
    const token = handleGetToken();

    if (token && !state.is_authenticated) {
      dispatch({ type: Actions.AUTHENTICATE });
    }
  }, []);

  return (
    <>
      <appStoreContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <SWR dispatch={dispatch}>
          {/* <AnimatedSplash state={state} dispatch={dispatch}> */}
          {children}
          {state.is_ui_loading && <Loading />}
          {/* </AnimatedSplash> */}
        </SWR>
      </appStoreContext.Provider>
    </>
  );
};

export const useStore: ContextHook = () => {
  const { state, dispatch } = useContext(appStoreContext);
  return { state, dispatch };
};
