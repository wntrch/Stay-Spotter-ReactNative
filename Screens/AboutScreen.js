import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            Our mission is to find every family the space they need to relax,
            reconnect, and enjoy precious time away together
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/wheel.png")}
            resizeMode="cover"
          />
          <Text style={styles.imageText}>We believe in family connection</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/walk.png")}
            resizeMode="cover"
          />
          <Text style={styles.imageText}>Relax and enjoy your personal time</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/pathtowater.png")}
            resizeMode="cover"
          />
          <Text style={styles.imageText}>Make memories together</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 19,
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "yellow",
  },
});

export default About;
