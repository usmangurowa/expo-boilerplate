import { View, Text } from "react-native";
import React from "react";
import tw from "../../twrnc";
import * as Animatable from "react-native-animatable";

const PinInput = ({
  value,
  error,
  length = 4,
}: {
  value: string;
  error?: boolean;
  length?: number;
}) => {
  const viewRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (error) {
      viewRef.current?.shake();
    }
  }, [error]);
  return (
    <Animatable.View
      ref={viewRef}
      style={tw`flex flex-row items-center justify-center`}
    >
      {Array.from({ length }).map((_, i) => (
        <View
          key={i}
          style={[
            tw`w-4 h-4 rounded-full mx-2`,
            i < value.length
              ? tw`bg-primary ${error ? "bg-danger" : ""}`
              : tw`bg-primary/10  ${error ? "bg-danger/10" : ""}`,
          ]}
        />
      ))}
    </Animatable.View>
  );
};

export default PinInput;
