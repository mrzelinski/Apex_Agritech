import * as React from "react";
import {StyleSheet,View,TextInput,Text,Pressable,Image,TouchableOpacity} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useState, useEffect } from 'react';
import { set, ref, push ,get, child, equalTo} from 'firebase/database';
import { db } from '../components/config';

const FrameSignUp = () => {
    const navigation = useNavigation();
    const [userid, setUid] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [phone, setPhone] = useState('');

    function submit(userid, firstName, lastName, email, phone, pwd){
  
      //const newKey = push(child(ref(database), 'users')).key;
      set(ref(db, 'users/' + userid), {
        userid: userid,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        pwd: pwd
      }).then(() => {
        //Data saved successfully
        alert('data created');
      })
        .catch((error) => {
          //Write failed
          alert(error);
        });
    };
    
    const validate = (pwd, pwdCheck, email, emailCheck) => {
      let errors = [];
      if (pwd !== pwdCheck) {
        errors.push("Passwords do not match");
      }
      if (email !== emailCheck) {
        errors.push("Emails do not match");
      }
      return errors;
    };
    
    const handleSubmit = () => {
      const errors = validate(pwd, pwdCheck, email, emailCheck);
      if (errors.length === 0) {
        submit(userid, firstName, lastName, email, phone, pwd);
      } 
    };
  

  return (
    <View style={styles.frameSignup}>
      <View style={[styles.signUpCreateAccount]}>
        <View style={styles.iphone1415ProMax1}>
          <View
            style={[
              styles.iphone1415ProMax1Child,
              styles.signUpCreateAccountLayout,
            ]}
          />
          <Image
            style={[styles.apexTitleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/Title.png")}
          />
          <Image
            style={[styles.logoPosition]}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={[styles.createAccountSection, styles.createLayout]}>
            <View
              style={[styles.createAccountSectionChild, styles.createLayout]}
            />
            <TextInput
              style={[styles.useridBox, styles.nameLayout]}
              placeholder="Exmple01"
              value ={userid} onChangeText={(userid)=>{setUid(userid)}}
            />
            <TextInput
              style={[styles.passwordBox, styles.nameLayout]}
              placeholder="Password"
              secureTextEntry={true}
              value ={pwd} onChangeText={(pwd)=>{setPwd(pwd)}}
            />
            <TextInput
              style={[styles.confirmPsswrdBox, styles.nameLayout]}
              placeholder="Password"
              secureTextEntry={true}
              value ={pwdCheck} onChangeText={(pwdCheck)=>{setPwdCheck(pwdCheck)}}
            />
            <TextInput style={[styles.lastNameBox, styles.nameLayout]}  value ={lastName} onChangeText={(lastName)=>{setLastName(lastName)}} />
            <TextInput style={[styles.nameBox, styles.nameLayout]} value ={firstName} onChangeText={(firstName)=>{setFirstName(firstName)}}/>
            <TextInput
              style={[styles.emailBox, styles.nameLayout]}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              autoCapitalize="sentences"
              value ={email} onChangeText={(email)=>{setEmail(email)}}
            />
            <TextInput
              style={[styles.confirmEmailBox, styles.nameLayout]}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              secureTextEntry={false}
              value ={emailCheck} onChangeText={(emailCheck)=>{setEmailCheck(emailCheck)}}
            />
            <TextInput style={[styles.phoneNumberBox, styles.nameLayout]} value ={phone} onChangeText={(phone)=>{setPhone(phone)}}/>
            <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
            <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
            <Text style={[styles.userId, styles.passwordTypo]}>User ID:</Text>
            <Text style={[styles.email, styles.passwordTypo]}>Email:</Text>
            <Text style={[styles.confirmEmail, styles.phoneNumberTypo]}>
              Confirm:
            </Text>
            <Text style={[styles.phoneNumber, styles.phoneNumberTypo]}>
              Phone:
            </Text>
            <Text style={[styles.password, styles.passwordTypo]}>
              Password:
            </Text>
            <Text style={[styles.confirmPassword, styles.passwordTypo]}>
              Confirm:
            </Text>
            <Text style={[styles.createAccount, styles.createTypo]}>
              Create Account
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.createAccButton, styles.component5Layout]}
            activeOpacity={0.2}
            onPress={handleSubmit}
          >
            <View style={[styles.component5, styles.component5Layout]}>
              <View
                style={[styles.component5Child, styles.createAccount1Position]}
              />
              <Text
                style={[styles.createAccount1, styles.createAccount1Position]}
              >
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: { // apex title
    overflow: "hidden",
    position: "absolute",
    top: 50,
  },
  logoPosition: { // logo position
    overflow: "hidden",
    position: "absolute",
    top: 680,
    left: 149,
    width: 110,
    height: 0, // APPEAR OR DISAPPEAR THE LOGO
  },
  signUpCreateAccountLayout: {
    width: 430,
    backgroundColor: Color.colorLightsteelblue,
    left: 0,
    top: 0,
    height: 932,
  },
  createLayout: { // create account box dimension
    height: 580,
    width: 361,
    position: "absolute",
  },
  createTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  component5Layout: { // create account dimension
    width: 171,
    height: 30,
    position: "absolute",
  },
  createAccount1Position: {
    top: -65,
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    position: "absolute",
  },
  apexTitleIcon: {
    top: 72,
    left: 45,
    width: 342,
    height: 27,
  },
  createAccountSectionChild: { // create account box
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
    top: 0,
  },
    ///---------------------------------- BOXES -------------------------------------///
    nameLayout: {
      height: 25,
      width: 300,
      backgroundColor: Color.colorWhite,
      position: "absolute",
    },
    nameBox: { // name box
    top: 60,
    left: 30,
    width: 200,
  },
  lastNameBox: { // last name box 
    top: 120,
    left: 30,
  },
  useridBox: { // user id box
    top: 180,
    left: 30,
    width: 200,
  },
  emailBox: { // email box
    top: 240,
    left: 30,
    width: 200,
  },
  confirmEmailBox: { // confirm email box
    top: 300,
    left: 30,
    width: 200,
  },
  phoneNumberBox: { // phone number box
    top: 360,
    left: 30,
    width: 200,
  },
  passwordBox: { /// password box
    top: 420,
    left: 30,
    width: 200,
  },
  confirmPsswrdBox: { // confirm password box
    top: 480,
    left: 30,
    width: 200,
  },

  ///---------------------------------- LABELS -------------------------------------///
  nameTypo: {
    left: 30,
    height: 30,
    width: 95,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "600",
    fontSize: FontSize.size_5x1,
    position: "absolute",
  },
  passwordTypo: {
    height: 30,
    width: 95,
    textAlign: "left",
    left:30,
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "600",
    fontSize: FontSize.size_5x1,
    position: "absolute",
  },
  phoneNumberTypo: {
    width: 99,
    height: 30,
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "600",
    fontSize: FontSize.size_5x1,
    position: "absolute",
  },
  firstName: {
    top: 40,
  },
  lastName: {
    top: 100,
  },
  userId: {
    top: 160,
    left: 0,
  },
  email: {
    top: 220,
    left: 8,
  },
  confirmEmail: {
    top: 280,
    left: 8,
  },
  phoneNumber: {
    top: 340,
    left: 3,
  },
  password: {
    top: 400,
    left: 12,
  },
  confirmPassword: {
    top: 460,
    left: 8,
  },
  createAccount: {
    top: 8,
    left: 99,
    width: 173,
    height: 26,
    position: "absolute",
  },
  createAccountSection: { // create account box position
    top: 96,
    left: 33,
  },
  component5Child: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkorange,
    width: "100%",
    top: "0%",
  },
  createAccount1: {
    height: "63.33%",
    width: "88.3%",
    left: "5.85%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  component5: { // create account button position
    height: 56,
    width: 360,
    left: 0,
    top: 0,
  },
  createAccButton: {
    top: 688,
    left: 128,
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  signUpCreateAccount: { // whole screen
    width: 430,
    backgroundColor: Color.colorLightsteelblue,
    left: -15,
    top: -30,
    height: 932,
  },
  frameSignup: { // idk
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameSignUp;
