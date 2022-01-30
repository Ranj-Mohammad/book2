import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ route, navigation }) => {
  const { user } = route.params;
  const [userdb, setuserdb] = useState( );
   async function onScreenLoad  ()  {
    const usersCollection =await firebase. firestore().collection('users').doc('aaa').get()
    console.log(usersCollection.data().name);
    setuserdb(usersCollection.data().name);
  };

  useEffect(() => {
    // write your code here, it's like componentWillMount
    onScreenLoad();
  }, []);
  const out = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("signout");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ImageName}>
          <Image style={styles.userImg} source={require("../assets/pp.jpg")} />
          <Text style={styles.userName}> 0{user.phoneNumber.slice(4)}</Text>
        </View>

        <Text> subscription info:</Text>
        <Text> {userdb}</Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnTxt}>کاراکردن</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={out}>
            <Text style={styles.userBtnTxt}>چونەدەرەوە</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 105,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  ImageName: {
    alignItems: "center",
    marginTop: " 5%",
  },
  userBtnWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    marginTop: "90%",
  },
  userBtn: {
    backgroundColor: "#3784fb",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  userBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
