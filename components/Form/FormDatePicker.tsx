import { View, Text } from "react-native";
import React from "react";
import { DatePicker } from "..";
import { DatePickerType } from "../common/DatePicker";
import { useFormikContext } from "formik";

const FormDatePicker = ({
  name,
  onChange,
  value,
  ...props
}: DatePickerType & { name: string }) => {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();
  return (
    <DatePicker
      value={values[name]?.toDateString()}
      onChange={(e, date) => setFieldValue(name, date, true)}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && (errors[name] as any)}
      {...props}
    />
  );
};

export default FormDatePicker;
