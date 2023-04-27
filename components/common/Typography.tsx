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
            "text-[32px] font-700 text-title": mode === "h1",
            "text-[28px] font-700 text-title": mode === "h2",
            "text-[24px] font-700 text-title": mode === "h3",
            "text-[20px] font-700 text-title": mode === "h4",
            "text-base font-700 text-title": mode === "h5",
            "text-sm font-700 text-title": mode === "h6",
            "text-base font-500 text-title": mode === "p",
            "text-sm font-400 text-sub-title": mode === "sub",
            "text-xs font-400 text-sub-title": mode === "sub2",
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
