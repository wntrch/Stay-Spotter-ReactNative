import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavbarComponent from "./navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavbarComponent />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
