import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Tile } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      id: "beachside",
      name: "Beachside",
      image: require("../assets/images/beachside.jpg"),
      description: "Enjoy the beachside view",
    },
    {
      id: "lakefront",
      name: "Lakefront",
      image: require("../assets/images/lakefront.jpg"),
      description: "Relax at the lakefront",
    },
    {
      id: "urban",
      name: "Urban Retreats",
      image: require("../assets/images/urban.jpg"),
      description: "Experience the urban lifestyle",
    },
  ];

  return (
    <View style={styles.container}>
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
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tile
            imageSrc={item.image}
            title={item.name}
            contentContainerStyle={styles.tileContent}
            caption={item.description}
            featured
            onPress={() =>
              navigation.navigate("ListingsDetailScreen", { category: item })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
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
    backgroundColor: "yellow",
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
