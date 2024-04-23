import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useState, useEffect } from 'react';
import 'firebase/database';
import { set, ref, onValue, get} from 'firebase/database';
import { db } from '../components/config';
import { setUserId } from "firebase/analytics";






const FrameAccountInfo = () => {
  const [userId, setUserId] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [pwd, setPwd] = useState(''); 


  return (
    <View style={styles.frameAccountInfo}>
      <View style={[styles.accountInfo, styles.accountInfoPosition]}>
        <View style={[styles.accountInfo, styles.accountInfoPosition]}>
          <View
            style={[styles.iphone1415ProMax1Child, styles.accountInfoPosition]}
          />
          <Image
            style={styles.layer1Icon}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />
          
          <Image
            style={[styles.layer1Icon1, styles.layer1Icon1Layout]}
            contentFit="cover"
            source={require("../assets/Title.png")}
          />
          <View style={styles.whiteUser} />
          <Text style={[styles.userIdWrobinson1]}>
            User ID: {userId}
          </Text>
          <Text style={[styles.helloWilliamRobinson, styles.helloClr]}>
            Hello! 
          </Text>
          <Text style={[styles.emailWrobinson1gmailcom, styles.passwordTypo]}>
            Email: {email}
          </Text>
          <Text style={[styles.phone1234567890, styles.passwordTypo]}>
            Phone: {phoneNumber}
          </Text>
          <Text style={[styles.password, styles.passwordTypo]}>
            Password: {pwd}
          </Text>
          <Pressable
            style={[styles.logout, styles.logoutLayout]}
            //onPress={readData}
          >
            <Text style={[styles.logout1]}>Logout</Text>
          </Pressable>
          <TouchableOpacity
            style={[styles.deleteAccount, styles.layer1Icon1Layout]}
            activeOpacity={0.2}
            //onLongPress={readUserData}
          >
            <Text style={[styles.deleteAccount1, styles.DeleteTypo]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountInfoPosition: { // skylbue background
    width: 430,
    left: -10,
    top: 0,
    position: "absolute",
    height: 932,
  },
  groupPosition: {
    borderTopWidth: 7,
    borderColor: Color.colorDarkorange,
    borderStyle: "solid",
    left: "-8.54%",
    right: "-8.54%",
    width: "117.07%",
    height: "23.33%",
    position: "absolute",
  },
  
  
// ------------------------------- WHITE CONTAINTER ------------------------------- //
  whiteUser: { // white container user
    top: 140,
    left: 45,
    width: 340,
    height: 420,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  // ------------------------------- USER ------------------------------- //
  userIdWrobinson1: { // user label
    top: 220,
    width: "30%",
    left: 65,
    height: 54,
    textAlign: "left",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  // ------------------------------- HELLO ------------------------------- //
  helloClr: { // hello color and size
    color: Color.colorDarkorange,
    fontSize: FontSize.size_5xl,
  },
  helloWilliamRobinson: { // hello label
    top: 170,
    left: 65,
    fontWeight: "500",
    fontFamily: FontFamily.k2DBold,
    width: 351,
    height: 54,
    position: "absolute",
    textAlign: "left",
  },
  // ------------------------------- EMAIL ------------------------------- // 
  emailWrobinson1gmailcom: {
    top: 300,
  },
  // ------------------------------- PHONE ------------------------------- //
  phone1234567890: {
    top: 350,
  },
  // ------------------------------- PASSWORD ------------------------------- //
  password: {
    top: 400,
  },
  passwordTypo: { // position and styles from email, phone, and password
    height: 25,
    width: 282,
    left: 98,
    fontSize: FontSize.size_3x,
    textAlign: "left",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "400",
    position: "absolute",
  },
  // ------------------------------- LOGOUT ------------------------------- //
  logout: { // logout button and text position
    top: 470,
    width: 303,
    left: 170,
    height: 54,
  },
  logoutLayout: { // logout button background
    height: "3%",
    width: "20%",
    //backgroundColor: Color.colorLightsteelblue, // to see where the background was
    position: "absolute",
  },
  logout1: {
    color: Color.colorDarkorange,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  // ------------------------------- DELETE ACC ------------------------------- //
  DeleteTypo: { //delete account text position
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "300",
    left: "0%",
    top: 0,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  deleteAccount: { // the button and text of delete account position
    top: 515,
    left: 130,
    //backgroundColor: Color.colorAliceblue,
    width: "40%",
  },
  deleteAccount1: { // delete account text 
    color: Color.colorSteelblue_100, //colorLightsteelblue
    fontSize: FontSize.size_3xS,
    textAlign: "center",
  },
  // ------------------------------- OTHERS ------------------------------- //
  layer1Icon1Layout: { // apex title
    height: 27,
    position: "absolute",
  },
  
  // ------------------------------- ------------------------------- //
  iphone1415ProMax1Child: {  //Skyblue background
    backgroundColor: Color.colorLightsteelblue,
  },
  layer1Icon: { // logo
    top: 608,
    left: 150,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax1Item: { // apex title white background
    width: 436,
    height: 90,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: "-11.67%",
    bottom: "88.33%",
  },
  groupItem: {
    top: "38.33%",
    bottom: "38.33%",
  },
  groupInner: {
    top: "88.33%",
    bottom: "-11.67%",
  },
  lineParent: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  burgerMenu: {
    left: 25,
    width: 38,
    height: 30,
    top: 73,
    position: "absolute",
  },
  layer1Icon1: { // apex title
    left: 45,
    width: 342,
    top: 43,
    overflow: "hidden",
  },
  
  
  
  
  password: {
    top: 400,
  },
  
  
  
  
  accountInfo: { // also skyblue background
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameAccountInfo: { // something from the background
    flex: 1,
    height: 932,
    width: "100%",
  },
  logDel:{
    top: 10,
    position: "absolute",
  },
});

export default FrameAccountInfo;
