import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactScreen from "../screens/ContactScreen";

const ContactStack = createStackNavigator();

const ContactNavigator = () => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { fontSize: 24 },
      }}
    >
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown: true,
          justifyContent: "center",
        }}
      />
    </ContactStack.Navigator>
  );
};

export default ContactNavigator;
