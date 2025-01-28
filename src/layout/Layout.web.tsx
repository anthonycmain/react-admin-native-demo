import { CoreLayoutProps } from "ra-core";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Constants from "expo-constants";
import Header from "./Header";

export const Layout = ({ children }: CoreLayoutProps) => {
  return (
    <PaperProvider>
      <InnerLayout>{children}</InnerLayout>
    </PaperProvider>
  );
};

const InnerLayout = ({ children }: CoreLayoutProps) => {
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.view}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    marginTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
});
