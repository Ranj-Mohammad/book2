import React from "react";
import { StyleSheet, Text, View, Pressable ,Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import{ useEffect, useState } from "react";
import firebase from "../firebase";
const Stack = createStackNavigator();
const Home = ({ navigation }) => {
  
  const onPressHandler = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if ( user) {

      
     
      navigation.navigate("profile",{user:user });
      console.log("done");
       
     
    } else {
      navigation.navigate("Login");
    
          }});
        }





  return (
    <View style={styles.body}>
      <View  style={styles.pro}>

      <Pressable
        onPress={onPressHandler}
        
      >
   <Image
          style={styles.userImg}
          source={require('../assets/pp.jpg') }
        />
      </Pressable>


      </View>
      <View  style={styles.container}> 
      <Text style={styles.text}>home</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pro: {
 
position:"absolute",


 top:'5%',
 left:'80%',
  },
  container:{
    
    
  },
  userImg: {
    height:   60,
    width:  60,
    borderRadius: 105,
  },
   
  text: {
   
    color: "#000",
    fontSize: 60,
    fontWeight: "bold",
    margin: 10,
  },
   
});
