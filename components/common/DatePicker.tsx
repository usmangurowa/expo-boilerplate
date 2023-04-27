import React from "react";
import {
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
  View,
  TextStyle,
} from "react-native";
import tw from "../../twrnc";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Typography from "./Typography";

export interface DatePickerType extends PressableProps {
  mode?: "contained" | "outlined" | "text";
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  textStyle?: TextStyle | TextStyle[];
  type?: "submit" | "reset" | "select";
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  name?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: DateTimePickerEvent, selectedDate?: Date) => void;
  dateFormat?:
    | "toISOString"
    | "toUTCString"
    | "toDateString"
    | "toLocaleString"
    | "toLocaleDateString"
    | "toLocaleTimeString"
    | "toTimeString"
    | "toGMTString"
    | any;
}

const DatePicker = ({
  style,
  disabled,
  value,
  right,
  left,
  textStyle,
  label,
  containerStyle,
  name,
  error,
  helperText,
  placeholder,
  onChange: onChangeProp,
  dateFormat = "toDateString",
  ...props
}: DatePickerType) => {
  const [show, setShow] = React.useState(false);
  const [date, setDate] = React.useState<Date | null>(null);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false);
    setDate(selectedDate || date);
    onChangeProp && onChangeProp(event, selectedDate);
  };

  return (
    <>
      <View style={[tw.style("w-full")]}>
        {label ? (
          <Text
            style={tw.style(
              `text-sm caption-regular ml-1 ${error ? "text-danger" : ""}`
            )}
          >
            {label}
          </Text>
        ) : null}
        <Pressable
          disabled={disabled}
          {...props}
          onPress={() => setShow(true)}
          style={[
            tw.style(
              `bg-white rounded-xl flex flex-row items-center border-sub-title border ${
                error ? "border-danger border" : ""
              }`
            ),
            style,
          ]}
        >
          {left ? <View style={tw`ml-4`}>{left}</View> : null}

          <Text
            numberOfLines={1}
            style={[
              tw.style("caption-regular p-4", {
                "text-sub-title": !value,
                "text-black": !!value || !!date,
              }),
            ]}
          >
            {value || placeholder}
          </Text>

          {right ? <View style={tw`ml-4`}>{right}</View> : null}
        </Pressable>
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
      {show && (
        <DateTimePicker
          value={new Date()}
          mode={"date"}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default DatePicker;
