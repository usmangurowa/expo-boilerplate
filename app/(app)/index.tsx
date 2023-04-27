import { View } from "react-native";
import React from "react";
import tw from "../../twrnc";
import { Button, Text } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "../../hooks";
import { Actions } from "../../context/reducer";

const Index = () => {
  const { state, dispatch } = useStore();
  console.log(state.user);

  const handleLogout = () => {
    dispatch({ type: Actions.LOGOUT });
  };
  return (
    <SafeAreaView style={tw`flex justify-center h-full container-sm`}>
      <Text mode="h5">Hello, {state.user?.email} </Text>
      <Button onPress={handleLogout} title="Logout" />
    </SafeAreaView>
  );
};

export default Index;
