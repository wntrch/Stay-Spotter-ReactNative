ScrollViewFix
import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
main

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
ScrollViewFix
          Our mission is to find every family the space they need to relax,
          reconnect, and enjoy precious time away together
          Our mission is to find every family the space they need to relax, reconnect, and enjoy precious time away together
main
        </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require('../assets/images/hammock.png')}
        />
      </View>
      <Text style={styles.subHeading}>We Believe in Family Connection</Text>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require('../assets/images/wheel.png')}
        />
      </View>
      <Text style={styles.subHeading}>Our Motto</Text>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require('../assets/images/pathtowater.png')}
        />
        <Text style={styles.subHeading}>Our Motto</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
ScrollViewFix
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    height: "30%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  // contentContainer: {
  //   paddingHorizontal: 20,
  // },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  bannerContainer: {
    height: '30%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
main
    marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
ScrollViewFix
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  // categoriesContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginTop: 20,
  // },
  // categoryImage: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 10,
  // },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
=======
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
main
});

export default About;
