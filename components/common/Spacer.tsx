import { View, ViewStyle, ViewProps } from "react-native";
import React from "react";
import tw from "../../twrnc";

interface SpacerProps extends ViewProps {
  m?: number;
  p?: number;
  my?: number;
  mx?: number;
  py?: number;
  px?: number;
}

const Spacer = ({ style, m, p, mx, my, px, py, ...props }: SpacerProps) => {
  return (
    <View
      {...props}
      style={[
        tw.style(
          `${m ? `m-${m}` : ""} ${p ? `p-${p}` : ""} ${mx ? `mx-${mx}` : ""} ${
            my ? `my-${my}` : ""
          } ${px ? `px-${px}` : ""} ${py ? `py-${py}` : ""}`
        ),
        style,
      ]}
    />
  );
};

export default Spacer;
