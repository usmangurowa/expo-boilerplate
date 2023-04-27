import { mutate } from "swr";
import { updateHeaders } from "../api";
import { handleGetToken, handleRemoveToken, handleUpdateToken } from "../utils";
import storage from "../utils/storage";

export enum Actions {
  INITIALIZE,
  AUTHENTICATE,
  FONTSLOADED,
  LOGOUT,
  APPREADY,
  UI_LOADING,
}

const reducer: ReducerType = (
  state: InitialStateProps,
  action
): InitialStateProps => {
  switch (action.type) {
    case Actions.INITIALIZE:
      return state;
    case Actions.FONTSLOADED:
      return { ...state, fonts_loaded: true };
    case Actions.APPREADY:
      return { ...state, is_app_ready: true };
    case Actions.UI_LOADING:
      return { ...state, is_ui_loading: action.payload };
    case Actions.LOGOUT:
      handleRemoveToken();
      updateHeaders("");
      storage.clearAll();
      return { ...state, is_authenticated: false };
    case Actions.AUTHENTICATE:
      if (action.payload) {
        handleUpdateToken(action.payload.token);
        mutate(
          "/users/me",
          { data: action.payload.user },
          {
            populateCache: true,
            revalidate: true,
          }
        );
      }
      updateHeaders(action?.payload?.token || handleGetToken());
      return { ...state, is_authenticated: true };
    default:
      return state;
  }
};

export default reducer;
