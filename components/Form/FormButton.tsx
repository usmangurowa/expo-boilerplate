import React from "react";
import Button, { ButtonType } from "../common/Button";
import { useFormikContext } from "formik";

const FormButton = ({ type, ...props }: ButtonType) => {
  const { handleSubmit, handleReset, isSubmitting, setSubmitting } =
    useFormikContext<any>();

  const handleAction = () => {
    if (type === "submit") {
      handleSubmit();
    } else if (type === "reset") {
      handleReset();
    } else {
      if (props?.onPress) props?.onPress();
    }
  };

  React.useEffect(() => {
    return () => {
      handleReset();
      setSubmitting(false);
    };
  }, []);

  return <Button loading={isSubmitting} onPress={handleAction} {...props} />;
};

export default FormButton;
