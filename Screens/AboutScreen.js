import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            Our mission is to find every family the space they need to relax,
            reconnect, and enjoy precious time away together
          </Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require("../assets/images/hammock.png")}
          />
        </View>
        <Text style={styles.subHeading}>We Believe in Family Connection</Text>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require("../assets/images/wheel.png")}
          />
        </View>
        <Text style={styles.subHeading}>Our Motto</Text>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require("../assets/images/pathtowater.png")}
          />
          <Text style={styles.subHeading}>Our Motto</Text>
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
    paddingBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  bannerContainer: {
    height: "30%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default About;
