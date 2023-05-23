import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import { toggleFavorite } from "../redux/slices/favoritesSlice";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenHeight } from "react-native-elements/dist/helpers";

const ListingDetailScreen = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(item.id));
  };

  const handleBookNow = () => {
    Linking.openURL(item.link);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.mainImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.favIconContainer}
          onPress={handleAddToFavorites}
        >
          <Icon
            name={favorites.includes(item.id) ? "heart" : "heart-outline"}
            type="ionicon"
            size={30}
            color={favorites.includes(item.id) ? "#f50" : "#fff"}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#666666", "#c9c9c9", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <View>
          <FlatList
            horizontal
            data={item.additionalImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.additionalImage} />
            )}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.caption}>{item.details}</Text>
            <View style={styles.separator} />
            <Text style={styles.sectionTitle}>Amenities</Text>
            {item.amenities.map((amenity, index) => (
              <Text key={index} style={styles.bulletItem}>
                {"\u2022 " + amenity}
              </Text>
            ))}
            <View style={styles.separator} />
            <Text style={styles.sectionTitle}>Price</Text>
            <Text style={styles.description}>{item.price}</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: {
    height: ScreenHeight * 0.3,
    backgroundColor: "#000",
    paddingTop: StatusBar.currentHeight,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  favIconContainer: {
    position: "absolute",
    top: 60,
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 25,
    padding: 8,
  },
  additionalImage: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 2,
    color: "#000",
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: "#fdf200",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  bookButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    borderBottomColor: "rgba(0, 0, 0, 0.45)",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bulletItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ListingDetailScreen;
