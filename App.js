import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./Screens/About";
import Contact from "./Screens/Contact";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>StaySpotter is here</Text>
      <StatusBar style="auto" />
      <About />
      <Contact />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
