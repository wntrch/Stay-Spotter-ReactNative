import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { categories } from "../data/categories";
import { listings } from "../data/listings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [spotType, setSpotType] = useState("all");

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    if (route.params?.reset) {
      setSpotType("all");
    }
    navigation.setParams({ reset: null });
  }, [route.params?.reset]);

  const filteredCategories = categories.filter(
    (category) => spotType === "all" || category.spotType === spotType
  );
  const filteredListings = listings.filter(
    (listing) => spotType === "all" || listing.spotType.includes(spotType)
  );

  const chunkArray = (array, chunkSize) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedCategories = chunkArray(filteredCategories, 2);
  const chunkedListings = chunkArray(filteredListings, 2);

  return (
    <>
      <View style={{ backgroundColor: "#000" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 30,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
            }}
          />
          <Text style={styles.headerTitle}>StaySpotter</Text>
        </View>
        <SearchBar
          placeholder="Enter a destination..."
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
        />
        <View style={styles.subHeadingContainer}>
          <TouchableOpacity onPress={() => setSpotType("trending")}>
            <View style={styles.iconTextContainer}>
              <Icon
                name="rocket"
                type="ionicon"
                size={18}
                color="#fff"
                style={{ marginRight: 3 }}
              />
              <Text style={styles.subHeading}>Trending</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.pipe}>|</Text>
          <TouchableOpacity onPress={() => setSpotType("categories")}>
            <View style={styles.iconTextContainer}>
              <Icon
                name="grid"
                type="ionicon"
                size={18}
                color="#fff"
                style={{ marginRight: 3 }}
              />
              <Text style={styles.subHeading}>Categories</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={["#666666", "#c9c9c9", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {chunkedCategories.map((chunk, index) => (
            <View key={index} style={styles.row}>
              {chunk.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryContainer}
                  onPress={() => setSpotType(category.id)}
                >
                  <View key={index} style={styles.categoryContainer}>
                    <View style={styles.innerContainer}>
                      <Image
                        source={category.image}
                        style={styles.categoryImage}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.categoryText}>{category.name}</Text>
                      <Text style={styles.categoryCaption}>
                        {category.description}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          {chunkedListings.map((chunk, index) => (
            <View key={index} style={styles.row}>
              {chunk.map((listing, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryContainer}
                  onPress={() =>
                    navigation.navigate("ListingDetail", {
                      item: listing,
                    })
                  }
                >
                  <View key={index} style={styles.categoryContainer}>
                    <View style={styles.innerContainer}>
                      <Image
                        source={{ uri: listing.image }}
                        style={styles.categoryImage}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.categoryText}>{listing.name}</Text>
                      <Text style={styles.categoryCaption}>
                        {listing.caption}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  // Header styles
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center", // Make sure text is centered
  },

  // Search Bar styles
  searchBarContainer: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
    borderRadius: 10,
    borderTopWidth: 0,
    marginBottom: 15,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
  },
  searchBarInput: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10,
  },
  searchBarInputContainer: {
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: "#fff",
    borderWidth: 1,
    height: 35,
  },

  // Subheading styles
  iconTextContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  pipe: {
    color: "#fff",
    fontSize: 23, // Adjust the size as needed
    marginBottom: 3,
    marginHorizontal: 10,
  },
  subHeading: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeadingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },

  // Category styles
  categoryContainer: {
    flex: 1,
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    backgroundColor: "#cac200",
    borderRadius: 12,
    shadowColor: "#000", // Here is the color of the shadow
    shadowOffset: {
      width: 0, // This is the horizontal offset of the shadow
      height: 2, // This is the vertical offset of the shadow
    },
    shadowOpacity: 0.35, // This controls the opacity of the shadow
    shadowRadius: 3.84, // This controls the blur radius of the shadow
    elevation: 5,
  },
  categoryImage: {
    borderRadius: 12,
    height: 100,
    width: "100%",
  },
  categoryText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
  },
  categoryCaption: {
    color: "#000",
    fontSize: 10,
    paddingTop: 2,
  },

  // Container styles
  contentContainer: {
    paddingHorizontal: 20,
  },
  innerContainer: {
    alignItems: "center",
    width: "90%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  // Text Container styles
  textContainer: {
    alignSelf: "stretch",
    paddingLeft: 8,
  },

  // Touchable Area styles
  touchableArea: {
    alignItems: "center",
    flexDirection: "row",
  },

  // Gradient Styles
  bannerContainer: {
    height: "20%",
  },
  bannerImage: {
    height: "100%",
    width: "100%",
  },
});

export default HomeScreen;
