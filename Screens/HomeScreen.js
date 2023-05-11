import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/images/homepagebanner.png")}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          Discover the perfect vacation rental at your fingertips.
        </Text>
        <Text style={styles.subHeading}>Featured Rental Categories</Text>
        <View style={styles.categoriesContainer}>
          <View style={styles.category}>
            <Image
              style={styles.categoryImage}
              source={require("../assets/images/beachside.jpg")}
            />
            <Text style={styles.categoryText}>Beachside</Text>
          </View>

          <View style={styles.category}>
            <Image
              style={styles.categoryImage}
              source={require("../assets/images/lakefront.jpg")}
            />
            <Text style={styles.categoryText}>Lakefront</Text>
          </View>
          <View style={styles.category}>
            <Image
              style={styles.categoryImage}
              source={require("../assets/images/urban.jpg")}
            />
            <Text style={styles.categoryText}>Urban Retreats</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    height: "20%",
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
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  categoriesContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
  },
  category: {
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
