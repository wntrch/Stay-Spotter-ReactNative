import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ListingsScreen from "../Screens/ListingsScreen";
import AboutScreen from "../Screens/AboutScreen";
import ContactScreen from "../Screens/ContactScreen";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#000",
  },
  tabBarIconStyle: {
    tintColor: "#fff",
  },
  tabBarLabelStyle: {
    color: "#fff",
  },
};

const LinearGradientHeaderBackground = () => {
  return (
    <LinearGradient
      colors={["#666666", "#fdf200", "#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    />
  );
};

const TabNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen
      name="Explore"
      component={ListingsScreen}
      options={{ headerTitle: "Explore Listings" }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{ headerTitle: "About Us" }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{ headerTitle: "Contact Us" }}
    />
  </Tab.Navigator>
);

const NavbarComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <LinearGradientHeaderBackground />,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavbarComponent;
