import { View } from "react-native";
import React from "react";
import tw from "../../twrnc";
import { Text } from "../../components";

const Index = () => {
  return (
    <SafeAreaView style={tw`h-full container-sm  flex justify-center`}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default Index;
