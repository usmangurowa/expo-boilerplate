import { Image, ImageStyle, ImageResizeMode } from "react-native";
import React from "react";
import tw from "../../twrnc";

const Logo = ({
  style,
  resizeMode,
}: {
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
}) => {
  return (
    <Image
      style={[tw`h-14 w-14`, style]}
      resizeMode={resizeMode ? resizeMode : "contain"}
      source={require("../../assets/images/logo.png")}
    />
  );
};

export default Logo;
