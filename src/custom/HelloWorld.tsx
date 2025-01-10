import { View } from "react-native";
import { Text } from "react-native-paper";

export const HelloWorld = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Hello World!</Text>
    </View>
  );
}; 