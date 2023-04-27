import useSWR, { SWRConfiguration, SWRResponse } from "swr";

const useUser = (config?: SWRConfiguration) => useSWR("/users/me", config); // TODO: Change this to the correct endpoint

export default useUser;
