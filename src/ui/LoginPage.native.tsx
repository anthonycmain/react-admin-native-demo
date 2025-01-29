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
import { AuthLayout } from "../layout/AuthLayout";
import { dataProvider } from "../providers/dataProvider";

// const translate = useTranslate();
const LoginPage = () => {
  const [email, setEmail] = useState<string>("nawaf.ibrahim@thedistance.co.uk"); //To Remove
  const [password, setPassword] = useState<string>("Testing1234!"); //To Remove
  const login = useLogin();
  const notify = useNotify();

  const submit = async () => {
    authProvider
      .login({ email, password })
      .then(result => {
        // Success case - login successful
        //const session = await loginWithTokens({ email, password });
        console.log("Login successful");
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
        <Card style={styles.card}>
          <Text>{login.name}</Text>
          <Form onSubmit={submit}>
            <RaTextInput label="Email" source="email" onChange={setEmail}  />
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
    backgroundColor: 'blue'
  },
  card: {
    flex: 1,
    marginTop: 100,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: 400
  }
});
