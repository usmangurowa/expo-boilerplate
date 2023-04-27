import { View, Text } from "react-native";
import React from "react";
import * as Yup from "yup";
import Form from "../../components/Form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const initialValues = { email: "", password: "" };

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form.Input name="email" placeholder="Email" />
        <Form.Input name="password" placeholder="Password" />
        <Form.Button type="submit" title="Login" />
      </Form>
    </View>
  );
};

export default Login;
