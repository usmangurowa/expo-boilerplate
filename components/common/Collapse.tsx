import { View, ViewStyle, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../twrnc";
import { ChevronDown, ChevronUp } from "../icons";

import * as Animatable from "react-native-animatable";

const Collapse = ({
  collapse,
  setCollapse,
  children,
  Title,
  style,
  height = 100,
}: {
  collapse?: boolean;
  setCollapse?: (val: boolean) => void;
  Title?: React.ReactNode;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  height?: number;
}) => {
  const [open, setOpen] = React.useState<boolean>(collapse || false);

  return (
    <View style={[tw`flex flex-col w-full `, style]}>
      <TouchableOpacity
        style={tw`flex flex-row items-center justify-between p-2`}
        onPress={() => setOpen(!open)}
      >
        <View>{Title}</View>
        <>{open ? <ChevronUp /> : <ChevronDown />}</>
      </TouchableOpacity>
      <Animatable.View
        transition={"height"}
        duration={300}
        style={[tw`flex flex-col w-full`, { height: open ? height : 0 }]}
      >
        {open ? children : null}
      </Animatable.View>
      {/* <View style={[tw`flex flex-col w-full`, { ...(!open && { height: 0 }) }]}>
        {open ? children : null}
      </View> */}
    </View>
  );
};

export default Collapse;
