import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { listings } from "../data/listings";

const SavedScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites);

  const renderFavoriteItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listingContainer}
        onPress={() => navigation.navigate("ListingDetail", { item: item })}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: item.image }} style={styles.listingImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.listingText}>{item.name}</Text>
          <Text style={styles.listingCaption}>{item.caption}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={listings.filter((listing) => favorites.includes(listing.id))}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listingContainer: {
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    backgroundColor: "#cac200",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listingImage: {
    borderRadius: 12,
    height: 100,
    width: "100%",
  },
  listingText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
  },
  listingCaption: {
    color: "#000",
    fontSize: 10,
    paddingTop: 2,
  },
  innerContainer: {
    alignItems: "center",
    width: "90%",
  },
  textContainer: {
    alignSelf: "stretch",
    paddingLeft: 8,
    paddingRight: 8,
    height: 50,
  },
});

export default SavedScreen;
