import api from "../api";
import type { Cache } from "swr";
import storage from "./storage";
import { ApiErrorResponse, ApiResponse } from "apisauce";

export const cacheProvider = (cache: Cache) => {
  const swrCache: Cache<any> = {
    get: (key) => {
      const valueFromMap = cache.get(key);

      if (valueFromMap) {
        return valueFromMap;
      }

      if (typeof key === "string" && storage.contains(key)) {
        const value = storage.getString(key);
        return value ? JSON.parse(value) : undefined;
      }

      return undefined;
    },
    set: (key, value) => {
      cache.set(key, value);

      if (typeof key === "string") {
        storage.set(key, JSON.stringify(value));
      }
    },
    delete: (key) => {
      cache.delete(key);

      if (typeof key === "string" && storage.contains(key)) {
        storage.delete(key);
      }
    },
    keys: function (): IterableIterator<string> {
      throw new Error("Function not implemented.");
    },
  };

  return swrCache;
};

export const fetcher = (url: string) =>
  api.get(url).then((res: ApiResponse<any>) => {
    if (res.ok) {
      return res.data;
    }
    const error: any = new Error(
      res.data?.message || "An error occurred while fetching the data."
    );

    error.info = res.data;
    error.cause = res.problem;
    error.status = res.status;

    throw error;
  });
// .catch((error: ApiErrorResponse<any>) => {
//   const error_: any = new Error(
//     error.data?.message || "An error occurred while fetching the data."
//   );
//   error_.info = error.data;
//   error_.cause = error.problem;
//   error_.status = error.status;
//   throw error_;
// });
