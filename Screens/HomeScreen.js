import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Tile } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

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
    <ScrollView>
      <LinearGradient
        colors={["#666666", "#fdf200", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 5 }}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>
              Discover the perfect vacation rental at your fingertips.
            </Text>
            <Text style={styles.subHeading}>Featured Rental Categories</Text>
          </View>

          {categories.map((category, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Tile
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
                // captionStyle={{
                //   backgroundColor: "rgba(0,0,0,0.5)",
                //   color: "white",
                //   padding: 10,
                // }}
              />
              {/* <Image
              source={category.image}
              style={{ height: 50, width: 50, display: "flex" }}
            /> */}
              {/* <Text
              style={{
                display: "flex",
                borderWidth: 1,
                borderColor: "black",
                borderStyle: "dashed",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                padding: 10,
              }}
            > */}
              {/* {category.name}
            </Text> */}
            </View>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
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
