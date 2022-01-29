import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from "../firebase";
const Otp = ({ route, navigation }) => {
    const [code, setCode] = useState("");
    const [state, setstate] = useState("");
    const { id } = route.params;
    const confirmCode = () => {

       
            
          
        console.log(id);
        const credential = firebase.auth.PhoneAuthProvider.credential(
          id,
          code
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            alert("loged" );
          })
          .catch(error => {
           console.log(error);
           setstate("invalide code"); 
        });
         
      };
      

    return (
        <View style={styles.container}  >
        <View style={styles.card2}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirmation Code"
            onChangeText={setCode}
            keyboardType="number-pad"
            value={code}
            style={styles.input}
          />
        </View>
<Text>{state}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={confirmCode} style={styles.button}>
            <Text style={styles.buttonText}>ok</Text>
          </TouchableOpacity>
        </View>
 
      </View>
        </View>
    )
}

export default Otp
const styles = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    card: {
      flex: 1,
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
    },
    card2: {
      borderRadius: 10,
      flex: 1,
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
     
    },
    inputContainer: {
      width: "100%",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      borderColor: "#0782F9",
      borderWidth: 2,
    },
    buttonContainer: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 4,
    },
    button: {
      backgroundColor: "#0782F9",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
  
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
  });
 