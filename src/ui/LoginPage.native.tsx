import { useState, Component } from "react";
import { useLogin, useNotify } from "react-admin";
import { Card, PaperProvider, Text } from "react-native-paper";
import { RaTextInput } from "../components/RaTextInput";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Constants from "expo-constants";
import { Form } from "./Form";
import { useTranslate } from "ra-core";
import { authProvider } from "../providers/authProvider";
import { AuthLayout } from "./AuthLayout";
import { dataProvider } from "../providers/dataProvider";

// const translate = useTranslate();
const LoginPage = () => {
  const [email, setEmail] = useState<string>("nawaf.ibrahim@thedistance.co.uk"); //To Remove
  const [password, setPassword] = useState<string>("Testing1234!"); //To Remove
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async () => {
    authProvider
      .login({ email, password })
      .then(async (result) => {
        const hC = await authProvider.handleCallback({ email, password }); //To change: Not the right method
        console.log("Login successful", hC);
        // Success case - login successful
        login({ email, password });
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
      <View style={styles.view}>
        <Card style={styles.view}>
          <Text>{login.name}</Text>
          <Form onSubmit={handleSubmit}>
            <RaTextInput label="Email" source="email" onChange={setEmail} />
            <RaTextInput
              source="password"
              type="password"
              onChange={setPassword}
            />
          </Form>
        </Card>
      </View>
    </PaperProvider>
  );
};

export default LoginPage;

// export const LoginPage = () => {
//     return (
// <Card>
//   <Text>
//     Hello Lena
//   </Text>
// </Card>
//     );
// };

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // flexDirection: 'row',
    // alignContent: 'center',
    alignItems: "center",
    justifyContent: "center",
    // verticalAlign: 'middle',
    // alignSelf: 'center'
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
