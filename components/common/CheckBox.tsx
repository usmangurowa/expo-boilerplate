import React from "react";
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import tw from "../../twrnc";

interface CheckBoxProps extends IBouncyCheckboxProps {
  rounded?: boolean;
}

const CheckBox = ({ style, textStyle, rounded, ...props }: CheckBoxProps) => {
  return (
    <BouncyCheckbox
      innerIconStyle={{
        borderRadius: rounded ? 999 : 2,
      }}
      iconStyle={{
        borderRadius: rounded ? 999 : 2,
      }}
      size={20}
      fillColor="#000"
      unfillColor="#fff"
      {...props}
      style={[tw`my-2`, style]}
      textStyle={[
        tw`text-base text-black font-500`,
        { textDecorationLine: "none" },
        textStyle,
      ]}
    />
  );
};

export default CheckBox;
