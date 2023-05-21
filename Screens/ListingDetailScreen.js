import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListingDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default ListingDetailScreen;
