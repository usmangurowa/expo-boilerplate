import { View, Text } from "react-native";
import React from "react";
import Select, { SelectType } from "../common/Select";
import { useFormikContext } from "formik";

const FormSelect = ({
  name,
  selectName,
  onChange,
  value,
  ...props
}: SelectType & { name: string; selectName?: string }) => {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  return (
    <Select
      value={values[name]}
      onChange={(data) =>
        setFieldValue(name, data[selectName || "value"], true)
      }
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && (errors[name] as any)}
      {...props}
    />
  );
};

export default FormSelect;
