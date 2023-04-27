import {
  View,
  Text,
  Image,
  ImageStyle,
  ImageProps,
  ViewStyle,
} from "react-native";
import React from "react";
import tw from "../../twrnc";

export interface AvatarProps extends ImageProps {
  containerStyle?: ViewStyle | ViewStyle[];
  size?: number;
}

const Avatar = ({ style, containerStyle, size, ...props }: AvatarProps) => {
  return (
    <View
      style={[
        tw`w-20 h-20 rounded-full overflow-hidden`,
        {
          width: size,
          height: size,
        },
        containerStyle,
      ]}
    >
      <Image {...props} style={[tw`w-full h-full `, style]} />
    </View>
  );
};

export default Avatar;
