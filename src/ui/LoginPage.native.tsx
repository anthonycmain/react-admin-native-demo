import { useState, Component } from "react";
import { useLogin, useNotify } from "react-admin";
import { Card, PaperProvider, Text } from "react-native-paper";
import { RaTextInput } from "../components/RaTextInput";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Form } from "./Form";
import { authProvider, loginWithTokens } from "../providers/authProvider";
import { useNavigate } from "react-router-native";

// const translate = useTranslate();
const LoginPage = () => {
  const [email, setEmail] = useState<string>("nawaf.ibrahim@thedistance.co.uk"); //To Remove
  const [password, setPassword] = useState<string>("Testing1234!"); //To Remove
  const login = useLogin();
  const notify = useNotify();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    authProvider
      .login({ email, password })
      .then(async (result) => {
        // Success case - login successful
        const session = await loginWithTokens({ email, password });
        console.log("Login successful", session);

        () => navigate("/companies");
      })
      .catch((error: any) => {
        console.log("Login error:", error);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          {
            type: "warning",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          }
        );
      });
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.view}>
        <Card style={styles.card}>
          <Text>{login.name}</Text>
          <Form onSubmit={handleSubmit}>
            <RaTextInput label="Email" source="email" onChange={setEmail} />
            <RaTextInput
              label="Password"
              source="password"
              type="password"
              onChange={setPassword}
            />
          </Form>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    verticalAlign: "middle",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    width: "100%",
  },
});
