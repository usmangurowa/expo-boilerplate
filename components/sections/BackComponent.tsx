import { View, Text } from "react-native";
import React from "react";
import tw from "../../twrnc";
import { ChevronLeft } from "../icons";
import Typography from "../common/Typography";
import { useRouter } from "expo-router";

const BackComponent = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <View style={tw`flex flex-row items-center my-2`}>
      <ChevronLeft onPress={() => router.back()} />
      <Typography style={tw`caption-regular text-lg ml-2`}>{title}</Typography>
    </View>
  );
};

export default BackComponent;
