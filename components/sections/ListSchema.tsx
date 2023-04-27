import { TouchableOpacity, View, ViewStyle } from "react-native";
import tw from "../../twrnc";
import React from "react";
import Spacer from "../common/Spacer";

export interface ListSchemaProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  icon?: React.ReactNode;
  left?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  leftContentStyle?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  space?: number;
}

const ListSchema = ({
  title,
  subTitle,
  icon,
  style,
  left,
  leftContentStyle,
  onPress,
  space = 1,
}: ListSchemaProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={onPress ? 0.8 : 1}
    style={[tw`flex flex-row items-start justify-between`, style]}
  >
    <View style={[tw`flex flex-row items-start w-4/5`, leftContentStyle]}>
      {left}
      {left ? <Spacer mx={space} style={tw`self-start`} /> : null}
      <View style={tw`flex flex-col items-start justify-start `}>
        {title}
        {subTitle}
      </View>
    </View>
    {icon}
  </TouchableOpacity>
);

export default ListSchema;
