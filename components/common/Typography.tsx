import { View, Text, TextProps, TextStyle } from "react-native";
import React from "react";
import tw from "../../twrnc";
import { useRouter } from "expo-router";

interface TypographyTypes extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  color?: string;
  mode?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "sub" | "sub2";
  href?: string;
  params?: object;
}

const Typography = ({
  children,
  color = "dark",
  mode = "p",
  style,
  href,
  params,
  onPress,
  ...props
}: TypographyTypes) => {
  const router = useRouter();

  const handleLinking = () => router.push({ pathname: href, params: params });
  return (
    <Text
      {...props}
      // adjustsFontSizeToFit={true}
      allowFontScaling={false}
      onPress={href ? handleLinking : onPress}
      style={[
        tw.style(
          {
            "text-[32px] caption-bold text-title": mode === "h1",
            "text-[28px] caption-bold text-title": mode === "h2",
            "text-[24px] caption-bold text-title": mode === "h3",
            "text-[20px] caption-bold text-title": mode === "h4",
            "text-base caption-bold text-title": mode === "h5",
            "text-sm caption-bold text-title": mode === "h6",
            "text-base caption-regular text-title": mode === "p",
            "text-sm caption-regular text-sub-title": mode === "sub",
            "text-xs caption-regular text-sub-title": mode === "sub2",
          },
          { color: tw.color(color) }
        ),
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
