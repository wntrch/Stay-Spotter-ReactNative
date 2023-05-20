import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";

const AboutStack = createStackNavigator();

const AboutNavigator = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { fontSize: 24 },
        headerTitleAlign: "center",
      }}
    >
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: true,
          title: "About Us",
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutNavigator;
