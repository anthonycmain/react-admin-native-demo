import { Card, PaperProvider, Text } from "react-native-paper";
import { RaTextInput } from "../components/RaTextInput";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Component } from "react";
import { useLogin } from 'react-admin';
import Constants from "expo-constants";
import { Form } from "./Form";
import { useTranslate } from "ra-core";

// const translate = useTranslate();

class LoginPage extends Component {
    submit = (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          // gather your data/credentials here
          const credentials = { };

          // Dispatch the userLogin action (injected by connect)
          //this.props.userLogin(credentials);
          console.log('submit')
    }

    render() {
        return (
            <PaperProvider>
              <View style={styles.view}>
                <Card style={styles.view}>
                  <Text>
                    Not authorised
                  </Text>
                  <Form>
                    <RaTextInput source="Username" />
                    <RaTextInput source="Password" />
                  </Form>
                </Card>
              </View>
            </PaperProvider>

        );
    }
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
    alignItems: 'center',
    justifyContent: 'center'
    // verticalAlign: 'middle',
    // alignSelf: 'center'
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});