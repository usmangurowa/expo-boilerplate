import { useFormikContext } from "formik";
import React from "react";

interface FormConfigProps {
  setSubmittingFalseAfter?: number;
}

let timeout: any;

const FormConfig = ({ setSubmittingFalseAfter }: FormConfigProps) => {
  const { setSubmitting, isSubmitting } = useFormikContext<any>();

  React.useEffect(() => {
    if (isSubmitting) {
      timeout = setTimeout(() => {
        setSubmitting(false);
      }, setSubmittingFalseAfter);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitting]);
  return null;
};

export default FormConfig;
