import {
  View,
  Text,
  PressableProps,
  Pressable,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import tw from "../../twrnc";

interface ChipProps extends PressableProps {
  title?: string;
  textStyle?: TextStyle | TextStyle[];
  variant?: "contained" | "outlined";
  status: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  opacity?: number;
  Icon?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Chip = ({
  style,
  textStyle,
  title,
  status,
  variant = "contained",
  opacity = 100,
  Icon,
}: ChipProps) => {
  return (
    <View
      style={[
        tw`bg-${status}/${opacity} rounded-full px-4 py-2 flex flex-row items-center`,
        style,
      ]}
    >
      {Icon ? Icon : null}
      <Text
        style={[
          tw.style(`caption-bold text-${opacity === 100 ? "white" : status}`),
          textStyle,
        ]}
      >
        {title?.replace(/good/gi, "Stable")}
      </Text>
    </View>
  );
};

export default Chip;
