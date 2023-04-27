import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import tw from "../twrnc";

const Loading = () => {
  return (
    <View
      style={tw`absolute top-0 left-0 h-full bg-black/20 w-screen flex items-center justify-center`}
    >
      <ActivityIndicator size="large" color={tw.color("primary")} />
    </View>
  );
};

export default Loading;
