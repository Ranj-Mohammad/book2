import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Lib from "./screen/Library";
import Start from "./screen/Start";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ماڵەوە") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "کتێب خانە") {
            iconName = focused ? "library" : "library";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0782F9",
        tabBarInactiveTintColor: "#889696",
      })}
    >
      <Tab.Screen
        name="ماڵەوە"
        component={Start}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="کتێب خانە"
        component={Lib}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
