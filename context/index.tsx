import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import reducer, { Actions } from "./reducer";

import {
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
  useFonts,
} from "@expo-google-fonts/pt-sans-caption";

import SWR from "../config/swr";
import useProtectedRoute from "../hooks/use-protected-routes";
import { handleGetToken } from "../utils";

const initialState: InitialStateProps = {
  is_authenticated: false,
  user: null,
  fonts_loaded: false,
  is_app_ready: false,
  is_online: false,
};

export const appStoreContext = createContext<{
  state: InitialStateProps;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const GlobalStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useProtectedRoute(state); // check if user is authenticated and move to authenticated routes else move to unauthenticated routes

  const [fontsLoaded] = useFonts({
    PTSansCaption_400Regular,
    PTSansCaption_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      dispatch({ type: Actions.FONTSLOADED });
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
        <SWR dispatch={dispatch}>{children}</SWR>
      </appStoreContext.Provider>
    </>
  );
};
