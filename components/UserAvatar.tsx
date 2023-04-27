import React from "react";
import useUser from "../hooks/use-user";
import { Avatar } from "react-native-paper";
import tw from "../twrnc";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

const UserAvatar = ({
  size = 50,
  onPress,
  style,
}: {
  size?: number;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}) => {
  const { data: user } = useUser();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
      style={[tw`self-start rounded-full`, style]}
    >
      {user?.avatar ? (
        <Avatar.Image size={size} source={{ uri: user?.avatar }} />
      ) : (
        <Avatar.Text
          labelStyle={tw`text-base`}
          size={size}
          label={
            user ? user?.firstName?.charAt(0) + user?.lastName?.charAt(0) : ""
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default UserAvatar;
