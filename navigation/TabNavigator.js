import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import SavedNavigator from "./SavedNavigator";
import AboutNavigator from "./AboutNavigator";
import ContactNavigator from "./ContactNavigator";
import { Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

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

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();

            navigation.navigate("HomeTab", {
              screen: "Home",
              params: { reset: true },
            });
          },
        }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              type="ionicon"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SavedTab"
        component={SavedNavigator}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "heart" : "heart-outline"}
              type="ionicon"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutNavigator}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              type="ionicon"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ContactTab"
        component={ContactNavigator}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "mail" : "mail-outline"}
              type="ionicon"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const NavbarComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { fontSize: 24 },
      }}
    >
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{
          headerShown: false,
          justifyContent: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigator;
