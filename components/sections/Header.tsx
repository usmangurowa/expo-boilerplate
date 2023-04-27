import React from "react";
import { View, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import tw from "../../twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../common/Typography";
import IconButton from "../common/IconButton";
import { ArrowLeft2 } from "iconsax-react-native";

const Header = ({
  style,
  title,
  rightIcon,
  color = "black",
}: {
  style?: ViewStyle | ViewStyle[];
  title?: string;
  rightIcon?: React.ReactNode;
  color?: string;
}) => {
  const router = useRouter();
  return (
    <View
      style={[
        tw.style(`flex flex-row items-center justify-between m-1`),
        style,
      ]}
    >
      <IconButton onPress={() => router.back()}>
        <MaterialCommunityIcons name="chevron-left" size={30} />
      </IconButton>
      <Typography style={tw`text-xl font-500 font-semibold mx-4 capitalize`}>
        {title}
      </Typography>
      {rightIcon ? rightIcon : <View style={tw`w-8`} />}
    </View>
  );
};

export default Header;
