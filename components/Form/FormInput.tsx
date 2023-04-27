import React from "react";
import Input, { InputProps } from "../common/Input";
import { useFormikContext } from "formik";

const FormInput = ({ name = "", ...props }: InputProps) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
    isSubmitting,
  } = useFormikContext<any>();

  return (
    <Input
      editable={!isSubmitting}
      onChangeText={(text) => setFieldValue(name, text)}
      onBlur={() => setFieldTouched(name)}
      value={values[name]}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && (errors[name] as any)}
      {...props}
    />
  );
};

export default FormInput;
