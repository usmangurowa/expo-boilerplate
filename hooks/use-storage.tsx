import { View, Text } from "react-native";
import React from "react";
import storage from "../utils/storage";

const useStorage = (name: string) => {
  // const [storage, setStorage] = React.useState<any>(null)

  const update = (data: any) => {
    storage.set(name, JSON.stringify(data));
  };

  return {
    data: storage.contains(name)
      ? JSON.parse(storage.getString(name) || "{}")
      : null,
    update,
  };
};

export default useStorage;
