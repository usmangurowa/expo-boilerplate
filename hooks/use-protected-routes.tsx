import React from "react";
import { usePathname, useRouter } from "expo-router";

const useProtectedRoutes = (state: InitialStateProps) => {
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    if (!state.fonts_loaded) return;
    if (
      state.is_authenticated &&
      (pathname.startsWith("/login") || pathname.startsWith("/register"))
    ) {
      router.replace("/");
    } else if (!state.is_authenticated) {
      if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
        return;
      } else {
        router.replace("/login");
      }
    }
  }, [state, pathname]);
  return null;
};

export default useProtectedRoutes;
