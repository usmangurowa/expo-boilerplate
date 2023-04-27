import {
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  Pressable,
} from "react-native";
import React from "react";
import tw from "../../twrnc";
import Typography from "./Typography";

import { Eye, EyeSlash } from "iconsax-react-native";
import IconButton from "./IconButton";

export interface InputProps extends TextInputProps {
  right?: React.ReactNode;
  left?: React.ReactNode;
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  name?: string;
  error?: boolean;
  helperText?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "datetime"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "color"
    | "image"
    | "file"
    | "range"
    | "checkbox"
    | "radio"
    | "submit"
    | "reset"
    | "button"
    | undefined;
}

const Input = (
  {
    style,
    right,
    left,
    label,
    containerStyle,
    name,
    error,
    helperText,
    type,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<TextInput>
) => {
  const [hidePassword, setHidePassword] = React.useState(
    type === "password" ? true : false
  );
  return (
    <View style={containerStyle}>
      {label ? (
        <Typography
          style={tw.style(`text-sm ml-1 ${error ? "text-danger" : ""}`)}
        >
          {label}
        </Typography>
      ) : null}
      <View
        style={tw.style(
          `bg-white rounded-xl flex flex-row items-center border-sub-title border ${
            error ? "border-danger border" : ""
          }`
        )}
      >
        {left ? <View style={tw`ml-4`}>{left}</View> : null}
        <TextInput
          secureTextEntry={props.secureTextEntry || hidePassword}
          ref={ref}
          placeholderTextColor={tw.color("sub-title")}
          {...props}
          style={[
            tw.style(
              `p-3 rounded-[5px] caption-regular flex-1 ${
                error ? "text-danger" : ""
              }`
            ),
            style,
          ]}
        />

        {right ? (
          <View style={tw`mx-2 relative`}>{right}</View>
        ) : type === "password" ? (
          <IconButton
            onPress={() => setHidePassword(!hidePassword)}
            style={tw`mx-2`}
          >
            {hidePassword ? (
              <EyeSlash color={tw.color("sub-title")} size={20} />
            ) : (
              <Eye color={tw.color("sub-title")} size={20} />
            )}
          </IconButton>
        ) : null}
      </View>
      {helperText && (
        <Typography
          numberOfLines={1}
          mode="sub"
          style={tw.style(`${error ? "text-danger" : ""}`)}
        >
          {helperText}
        </Typography>
      )}
    </View>
  );
};

export default React.forwardRef(Input);
