import { View, ViewStyle, ViewProps } from "react-native";
import React from "react";
import tw from "../../twrnc";

interface DividerProps extends ViewProps {
  color?: string;
  width?: number;
}

const Divider = ({
  style,
  color = "gray-200",
  width,
  ...props
}: DividerProps) => {
  return (
    <View
      {...props}
      style={[
        {
          borderBottomColor: tw.color(color),
          borderBottomWidth: width || 1,
        },
        style,
      ]}
    />
  );
};

export default Divider;
