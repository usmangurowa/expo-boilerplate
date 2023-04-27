import useSWR, { SWRConfiguration } from "swr";

const useApi = (endpoint: string | null, config?: SWRConfiguration) => {
  return useSWR(endpoint ? endpoint : null, {
    ...config,
  });
};

export default useApi;
