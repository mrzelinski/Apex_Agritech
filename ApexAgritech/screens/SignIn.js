//ADD EXPORTING THE userUrl variable. "We can easily pass data between screens 
//using this. props. navigation. navigate() method, the data which wants to pass 
//between screens is passed as a parameter also called params, in this method."
//      Probably your wheelhouse Ishmael
import * as React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { StackNavigationProp, useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useState, useEffect } from 'react';
import { set, ref, push, get, child, equalTo, onValue } from 'firebase/database';
import { db } from '../components/config';

import firebase from 'firebase/app';
import 'firebase/database';

const SignIn = () => {
  
  const navigation = useNavigation();
  const [userIdInput, setUserIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [error, setError] = useState('');
  const signInSuccess = () => {
    Alert.alert(
      "You are logged in!",
      "Navigating you now...."
    );
  };
  const signInFail = () => {
    Alert.alert(
      "Sign in failed",
      "Please try again"
    );
  };
  const signInError = () => {
    Alert.alert(
      "There was an error",
      "Please try again"
    );
  };

  function readData() {
    
    const userRef = ref(db, 'users/' + userIdInput); 
    const passRef = ref(db, 'users/' + pwdInput);
    const extractUrlPart = (refString) => {
      const lastIndex = refString.lastIndexOf('/');
      return refString.substring(lastIndex + 1);
    };
    const userUrl = extractUrlPart(userRef.toString());
    const passUrl = extractUrlPart(passRef.toString());
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (userUrl === userIdInput && passUrl === pwdInput) {
        signInSuccess();
        alert(userUrl);
        alert(userIdInput);
        //setPassword(data.pwd);
      } else {
        signInFail();
        alert('User not found');
        alert(userUrl);
        alert(userIdInput);
        alert(passUrl);
      }
      
    });
  }
  return (
    <View style={styles.signin}>
      <View style={styles.framePosition}>
        <View style={[styles.frameLoginChild, styles.framePosition]} />
        <Image
          style={[styles.apexTitleIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/Title.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/Logo.png")}
        />
        <View style={[styles.logInBox, styles.logLayout]}>
          <View style={[styles.logInBoxChild, styles.logLayout]} />
          <Text style={[styles.userId, styles.userIdTypo]}>User ID:</Text>
          <TextInput
            style={[styles.textboxUserId, styles.textboxLayout]}
            placeholder="example01"
            value ={userIdInput} 
            onChangeText={(userIdInput)=>{setUserIdInput(userIdInput)}}
          />
          <Text style={[styles.password, styles.passwordPosition]}>
            Password:
          </Text>
          <TextInput
            style={[styles.textboxPsswrd, styles.passwordPosition]}
            placeholder="password"
            autoCapitalize="none"
            multiline={false}
            secureTextEntry={true}
            value ={pwdInput} 
            onChangeText={(pwdInput)=>{setPwdInput(pwdInput)}}
          />
          <TouchableOpacity
            style={styles.createAccount}
            activeOpacity={0.2}
            //onPress={handleSignIn}
          >
            <Text style={[styles.createAccount1, styles.loginTypo]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.component4}
          activeOpacity={0.2}
          onPress={readData}
        >
          <TouchableOpacity
            style={[styles.logInButton, styles.loginPosition]}
            activeOpacity={0.2}
            onPress={readData}
          />
          <Text style={[styles.login, styles.loginPosition]}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 430,
    left: -20,
    top: 0,
    position: "absolute",
    height: 932,
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  logLayout: {
    height: 266,
    width: 334,
    position: "absolute",
  },
  userIdTypo: {
    width: 95,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    height: 30,
    left: 0,
  },
  textboxLayout: {
    height: 36,
    width: 200,
    backgroundColor: Color.colorWhite,
    left: 116,
  },
  passwordPosition: {
    top: 97,
    position: "absolute",
  },
  loginTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  loginPosition: {
    top: "0%",
    position: "absolute",
  },
  frameLoginChild: {
    backgroundColor: Color.colorLightsteelblue,
  },
  apexTitleIcon: {
    top: 149,
    left: 44,
    width: 342,
    height: 27,
  },
  logoIcon: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
  },
  logInBoxChild: {
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
    top: 0,
    height: 266,
    width: 334,
  },
  userId: {
    height: 30,
    top: 37,
    position: "absolute",
  },
  textboxUserId: {
    top: 37,
    position: "absolute",
  },
  password: {
    height: 30,
    width: 95,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 0,
  },
  textboxPsswrd: {
    height: 36,
    width: 200,
    backgroundColor: Color.colorWhite,
    left: 116,
  },
  createAccount1: {
    width: 173,
    height: 22,
    textAlign: "center", // Update textAlign to center
  },
  createAccount: {
    left: 71,
    bottom: 20, // Update to bottom instead of top
    position: "absolute",
  },
  logInBox: {
    top: 247,
    left: 52,
  },
  logInButton: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkorange,
    width: "100%",
    top: "0%",
  },
  login: {
    height: "53.33%",
    width: "66.08%",
    left: "17.54%",
    textAlign: "center", // Update textAlign to center
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  component4: {
    top: 428,
    left: 125,
    width: 171,
    height: 30,
    position: "absolute",
  },
  signin: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});
export default SignIn;
