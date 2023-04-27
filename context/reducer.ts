import { updateHeaders } from "../api";

export enum Actions {
  INITIALIZE,
  AUTHENTICATE,
  FONTSLOADED,
  LOGOUT,
  APPREADY,
  ONLINE,
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
    case Actions.ONLINE:
      return { ...state, is_online: action.payload };
    case Actions.LOGOUT:
      // run logic to remove token here and update headers
      // handleRemoveToken();
      // updateHeaders();
      return { ...state, is_authenticated: false };
    case Actions.AUTHENTICATE:
      // run logic to update token here
      // handleUpdateToken(action.payload);
      // updateHeaders("token");
      return { ...state, is_authenticated: true, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
