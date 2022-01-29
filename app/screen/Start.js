import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "react-native/Libraries/NewAppScreen";
import Otp from "./Otp";
 
const Stack = createStackNavigator();
const Start = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Start;

const styles = StyleSheet.create({});
