import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "../../twrnc";
import { useRouter } from "expo-router";

const IconButton = ({
  icon,
  children,
  style,
  href,
  params,
  ...props
}: TouchableOpacityProps & {
  icon?: string | React.ReactNode;
  href?: string;
  params?: object;
}) => {
  const router = useRouter();

  const handleLink = React.useCallback(() => {
    router.push({ pathname: href, params: params });
  }, [href]);
  return (
    <TouchableOpacity
      {...props}
      onPress={href ? handleLink : props.onPress}
      style={[tw`rounded-full p-2`, style]}
    >
      {icon ? (
        <>
          {typeof icon === "string" ? (
            <MaterialCommunityIcons
              name={icon as any}
              size={24}
              color="black"
            />
          ) : (
            icon
          )}
        </>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
