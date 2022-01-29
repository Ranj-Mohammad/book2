import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
 
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../firebase";
const Stack = createStackNavigator();
const Login = ({ navigation }) => {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [done, setdone] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const Verification = () => {
    if (phoneNumber.length === 10 && phoneNumber.slice(0, 2) === "77"||phoneNumber.length === 11 && phoneNumber.slice(0, 2) === "07") {
      return true;
    } else {
      return false;
    }
  };
  const sendVerification = () => {
    const valid = Verification();
    if (valid) {
      if (phoneNumber[0] === "0") {
        const newstr = "+964" +phoneNumber.slice(1);  
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber( newstr, recaptchaVerifier.current)
        .then((res)=>{navigation.navigate("Otp",{id:res});}  );
         setPhoneNumber('');
      } 
      else {
        const newstr = phoneNumber;
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber("+964" + newstr, recaptchaVerifier.current)
        .then((res)=>{navigation.navigate("Otp",{id:res});}  );
        setPhoneNumber('');
      }
       
    } else {
      setdone("invalid number");
    }
  };
   

   

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Phone Number"
            autoCompleteType="tel"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
          />
        </View>
        <Text>{done}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={sendVerification} style={styles.button}>
            <Text style={styles.buttonText}>Send </Text>
          </TouchableOpacity>
        </View>
      </View>

     

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </View>
  );
};

export default Login;
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
    backgroundColor: "#D1C8C8",
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
