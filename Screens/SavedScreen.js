import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listings } from "../data/listings";
import { SwipeRow } from "react-native-swipe-list-view";
import { toggleFavorite } from "../redux/slices/favoritesSlice";

const SavedScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const renderFavoriteListing = ({ item: listing }) => {
    // const handleDelete = (listing) => {
    //   Alert.alert(
    //     "Delete Favorite?",
    //     "Are you sure you wish to delete the favorite listing " +
    //       listing.name +
    //       "?",
    //     [
    //       {
    //         text: "Cancel",
    //         onPress: () => console.log(listing.name + " Not Deleted"),
    //         style: "cancel",
    //       },
    //       {
    //         text: "OK",
    //         onPress: () => dispatch(toggleFavorite(listing.id)),
    //       },
    //     ],
    //     { cancelable: false }
    //   );
    // };

    return (
      // <SwipeRow rightOpenValue={-100}>
      // <View style={styles.deleteView}>
      // <TouchableOpacity
      //   style={styles.deleteTouchable}
      //   onPress={() => handleDelete(listing)}
      // >
      //   <Text style={styles.deleteText}>Delete</Text>
      // </TouchableOpacity>
      // </View>
      <TouchableOpacity
        style={styles.listingContainer}
        onPress={() => navigation.navigate("ListingDetail", { item: listing })}
      >
        <View style={styles.rowContainer}>
          <Image source={{ uri: listing.image }} style={styles.listingImage} />
          <View style={styles.textContainer}>
            <Text style={styles.listingText}>{listing.name}</Text>
            <Text style={styles.listingCaption}>{listing.location}</Text>
            <Text style={styles.listingCaption}>{listing.details}</Text>
          </View>
        </View>
      </TouchableOpacity>
      // </SwipeRow>
    );
  };

  return (
    <FlatList
      data={listings.filter((listing) => favorites.includes(listing.id))}
      renderItem={renderFavoriteListing}
      keyExtractor={(listing) => listing.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 100,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listingContainer: {
    margin: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
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
    width: "30%",
    marginRight: 10,
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
    paddingTop: 6,
  },
  textContainer: {
    alignSelf: "stretch",
    paddingLeft: 8,
    paddingRight: 8,
    height: 50,
  },
});

export default SavedScreen;
