import { View, Text } from "react-native";
import React from "react";
import { Formik, FormikConfig } from "formik";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormConfig from "./FormConfig";

const Form = ({ children, ...props }: FormikConfig<any>) => {
  return <Formik {...props}>{() => <>{children}</>}</Formik>;
};

Form.Input = FormInput;
Form.Button = FormButton;
Form.Select = FormSelect;
Form.DatePicker = FormDatePicker;
Form.Config = FormConfig;

export default Form;

export { FormInput, FormButton, FormSelect, FormDatePicker, FormConfig };
