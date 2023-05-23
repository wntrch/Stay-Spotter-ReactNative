import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SavedScreen from "../screens/SavedScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const SavedStack = createStackNavigator();

const SavedNavigator = () => {
  return (
    <SavedStack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { fontSize: 24 },
      }}
    >
      <SavedStack.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: true,
          title: "Saved",
          justifyContent: "center",
        }}
      />
      <SavedStack.Screen
        name="ListingDetail"
        component={ListingDetailScreen}
        options={{
          headerShown: true,
          title: "Listing Detail",
          justifyContent: "center",
        }}
      />
    </SavedStack.Navigator>
  );
};

export default SavedNavigator;
