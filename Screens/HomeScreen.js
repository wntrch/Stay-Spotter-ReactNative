import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [spotType, setSpotType] = useState("all");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const categories = [
    {
      id: "beachside",
      name: "Beachside",
      image: require("../assets/images/beachside.jpg"),
      description: "Enjoy the beachside view",
      spotType: "categories",
    },
    {
      id: "lakefront",
      name: "Lakefront",
      image: require("../assets/images/lakefront.jpg"),
      description: "Relax at the lakefront",
      spotType: "categories",
    },
    {
      id: "urban",
      name: "Urban Retreats",
      image: require("../assets/images/urban.jpg"),
      description: "Experience the urban lifestyle",
      spotType: "categories",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
    {
      id: "resort",
      name: "Resort",
      image: require("../assets/images/homepagebanner.png"),
      description: "Escape to a luxurious resort",
      spotType: "trending",
    },
  ].filter((item) => spotType === "all" || item.spotType === spotType);

  const chunkArray = (array, chunkSize) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedCategories = chunkArray(categories, 2);

  return (
    <>
      <View style={{ backgroundColor: "#000" }}>
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
        colors={["#666666", "#fdf200", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ paddingBottom: 140 }}
      >
        <ScrollView>
          {chunkedCategories.map((chunk, index) => (
            <View key={index} style={styles.row}>
              {chunk.map((category, index) => (
                <View key={index} style={styles.categoryContainer}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </>

    // {categories.map((category, index) => (
    //   <View
    //     key={index}
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       flexDirection: "row",
    //       alignItems: "center",
    //     }}
    //   />
    /* <Tile
                imageSrc={category.image}
                title={category.name}
                contentContainerStyle={styles.tileContent}
                // caption={category.description}
                featured
                onPress={() =>
                  navigation.navigate("ListingsDetailScreen", {
                    category: item,
                  })
                }
                titleStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: 10,
                }}
                captionStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: 10,
                }}
              /> */
    /* <Image
                source={category.image}
                style={{ height: 50, width: 50, display: "flex" }}
              />
              <Text
                style={{
                  display: "flex",
                  borderWidth: 1,
                  borderColor: "black",
                  borderStyle: "dashed",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: 10,
                }}
              >
                {category.name}
              </Text>
            </View>
          ))} */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  pipe: {
    fontSize: 23, // Adjust the size as needed
    color: "#fff",
    marginHorizontal: 10,
    marginBottom: 3,
  },
  subHeadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "dashed",
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  categoryImage: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  categoryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  searchBarContainer: {
    backgroundColor: "#000",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    marginRight: 45,
    marginLeft: 45,
  },
  searchBarInputContainer: {
    backgroundColor: "#000",
    borderColor: "#fff",
    borderWidth: 1,
    borderBottomWidth: 1,
    height: 35,
  },
  searchBarInput: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  touchableArea: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
