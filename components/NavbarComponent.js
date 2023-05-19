import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
import AboutScreen from "../Screens/AboutScreen";
import ContactScreen from "../Screens/ContactScreen";
import { Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  tabBarActiveTintColor: "#fdf200",
  tabBarInactiveTintColor: "gray",
  tabBarIconSize: 24,
};

const TabNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? "home" : "home-outline"}
            type="ionicon"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Saved"
      component={FavoritesScreen}
      options={{
        headerTitle: "Saved Listings",
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? "heart" : "heart-outline"}
            type="ionicon"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        headerTitle: "About Us",
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? "information-circle" : "information-circle-outline"}
            type="ionicon"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        headerTitle: "Contact Us",
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? "mail" : "mail-outline"}
            type="ionicon"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const NavbarComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        // headerLeft: () => {
        //   <Icon
        //     name="menu"
        //     size={24}
        //     color="#fff"
        //     style={{ marginLeft: 10 }}
        //     onPress={() => navigation.openDrawer()}
        //   />;
        // },
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
