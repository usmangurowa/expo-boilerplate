import React from "react";
import { useImmer } from "use-immer";

let timeout: any;

const useError = ({ after, reset }: { reset?: boolean; after?: number }) => {
  const [error, setError] = useImmer({
    error: false,
    message: "",
  });

  React.useEffect(() => {
    if (reset) {
      if (error.error) {
        timeout = setTimeout(() => {
          setError((draft) => {
            draft.error = false;
            draft.message = "";
            return draft;
          });
        }, after || 2000);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [error.error]);

  return { ...error, setError };
};

export default useError;
