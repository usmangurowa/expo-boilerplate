import React from "react";
import { appStoreContext } from "../context";

const useStore: ContextHook = () => {
  const { state, dispatch } = React.useContext(appStoreContext);
  return { state, dispatch };
};

export default useStore;
