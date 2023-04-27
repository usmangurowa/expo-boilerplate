import {
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextProps,
} from "react-native";
import tw from "../../twrnc";
import React from "react";
import Spacer from "../common/Spacer";

const ListItem = ({
  left,
  icon,
  subTitle,
  title,
  onPress,
  leftContentStyle,
  space,
  style,
  subTitleProps,
  titleProps,
  textContentStyle,
}: {
  title?: string;
  titleProps?: TextProps;
  subTitle?: string;
  subTitleProps?: TextProps;
  icon?: React.ReactNode;
  left?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  leftContentStyle?: ViewStyle | ViewStyle[];
  textContentStyle?: ViewStyle | ViewStyle[];

  onPress?: () => void;
  space?: number;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
      style={[tw`flex flex-row items-start justify-between`, style]}
    >
      <View style={[tw`flex flex-row items-start w-4/5`, leftContentStyle]}>
        {left}
        {left ? <Spacer mx={space} style={tw`self-start`} /> : null}
        <View
          style={[
            tw`flex flex-col items-start justify-start`,
            textContentStyle,
          ]}
        >
          <Text
            numberOfLines={1}
            {...titleProps}
            style={[tw`text-black caption-regular text-lg`, titleProps?.style]}
          >
            {title}
          </Text>
          <Text
            numberOfLines={2}
            {...subTitleProps}
            style={[
              tw`text-xs caption-regular text-sub-title`,
              subTitleProps?.style,
            ]}
          >
            {subTitle}
          </Text>
        </View>
      </View>
      {icon}
    </TouchableOpacity>
  );
};

export default ListItem;
