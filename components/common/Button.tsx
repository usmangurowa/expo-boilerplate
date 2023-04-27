import React from "react";
import {
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
  View,
  ActivityIndicator,
  TextStyle,
} from "react-native";
import tw from "../../twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export interface ButtonType extends PressableProps {
  title?: string;
  mode?: "contained" | "outlined" | "text";
  style?: ViewStyle | ViewStyle[];
  full?: boolean;
  grow?: boolean;
  disabled?: boolean;
  textColor?: string;
  loading?: boolean;
  icon?: any;
  iconColor?: string;
  iconRight?: React.ReactNode;
  textStyle?: TextStyle | TextStyle[];
  onPress?: () => void;
  href?: string;
  params?: object;
  Icon?: React.ReactNode;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  title,
  mode = "contained",
  style,
  full,
  disabled,
  textColor = "",
  loading,
  icon,
  Icon,
  iconColor,
  iconRight,
  textStyle,
  onPress,
  href,
  params,
  grow,
  ...props
}: ButtonType) => {
  const router = useRouter();

  const handleLink = React.useCallback(() => {
    router.push({ pathname: href, params: params });
  }, [href]);
  return (
    <Pressable
      disabled={disabled || loading}
      {...props}
      onPress={href ? handleLink : onPress}
      style={[
        tw.style(
          `py-3 px-5 flex flex-row items-center justify-center relative rounded-lg ${
            full ? "w-full" : "self-start"
          }`,
          {
            "bg-primary py-3": mode === "contained",
            "bg-transparent border border-primary ": mode === "outlined",
            "bg-transparent ": mode === "text",
            "opacity-50": !!disabled,
            "flex-grow": !!grow,
          }
        ),
        style,
      ]}
    >
      {!loading && Icon ? Icon : null}
      {!loading && icon ? (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={tw.color(
            iconColor ? iconColor : mode === "contained" ? "white" : "primary"
          )}
        />
      ) : null}
      {title ? (
        <Text
          // adjustsFontSizeToFit={true}
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            tw.style(
              {
                "text-white": mode === "contained",
                "text-primary": mode === "outlined",
                "text-primary ": mode === "text",
                "opacity-0": !!loading,
              },
              `text-base font-500 mx-2 ${textColor}`
            ),
            textStyle,
          ]}
        >
          {title}
        </Text>
      ) : null}
      {!loading && iconRight ? <View style={tw`ml-4`}>{iconRight}</View> : null}
      {loading && (
        <View
          style={tw`absolute flex flex-row justify-center items-center h-full w-full`}
        >
          <ActivityIndicator
            color={tw.color(mode === "contained" ? "white" : "primary")}
          />
        </View>
      )}
    </Pressable>
  );
};

export default Button;
