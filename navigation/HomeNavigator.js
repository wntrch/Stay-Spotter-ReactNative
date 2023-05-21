import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { fontSize: 24 },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "StaySpotter",
          justifyContent: "center",
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
