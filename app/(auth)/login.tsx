import { View } from "react-native";
import React from "react";
import * as Yup from "yup";
import Form from "../../components/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../twrnc";
import { Spacer, Text } from "../../components";
import { FormikHelpers } from "formik";
import { useStore } from "../../hooks";
import { Actions } from "../../context/reducer";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const initialValues = { email: "", password: "" };

const Login = () => {
  const { dispatch } = useStore();

  const handleLogin = (
    data: typeof initialValues,
    helpers: FormikHelpers<typeof initialValues>
  ) => {
    setTimeout(() => {
      dispatch({ type: Actions.AUTHENTICATE, payload: data });
      console.log(data);
      helpers.setSubmitting(false);
    }, 3000);
  };
  return (
    <SafeAreaView style={tw`container`}>
      <Text mode="h1">Login</Text>
      <Spacer my={3} />
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleLogin}
      >
        <Form.Input name="email" placeholder="Email" />
        <Spacer my={3} />
        <Form.Input name="password" placeholder="Password" type="password" />
        <Spacer my={3} />
        <Form.Button type="submit" title="Login" />
      </Form>
    </SafeAreaView>
  );
};

export default Login;
