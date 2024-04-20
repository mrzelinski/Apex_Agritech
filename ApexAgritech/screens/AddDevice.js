import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  TextInput,
  Image
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useState } from "react";
import { set, ref, push ,get, child, equalTo} from 'firebase/database';
import { db } from '../components/config';


function addDevice(deviceName, location, otherInfo) {
  const deviceNameStr = typeof deviceName === 'object' ? deviceName.deviceName : deviceName;
  set(ref(db, 'devices/' + deviceNameStr), {
    deviceName: deviceName,
    location: location,
    otherInfo: otherInfo
  }).then(() => {
    // Data saved successfully
    alert('Data created');
  }).catch((error) => {
    // Write failed
    alert(error);
  });
}

function checkDeviceExists(deviceName) {
  const devicesRef = ref(db, 'devices');
  return get(child(devicesRef, deviceName)).then((snapshot) => {
    if (snapshot.exists()) {
      // Device with the same name already exists
      return true;
    } else {
      // Device with the same name does not exist
      return false;
    }
  }).catch((error) => {
    console.error("Error checking device existence: ", error);
    return false; // Assume device doesn't exist in case of error
  });
}



const FrameAddNewDevice = () => {
  const navigation = useNavigation();
  const [deviceName, setName] = useState('');
  const [location, setLocation] = useState('');
  const [otherInfo, setOtherInfo] = useState(''); 

  return (
    <View style={styles.frameAddNewDevice}>
      <View style={[styles.manageDevices, styles.manageDevicesPosition]}>
        <View style={[styles.manageDevices, styles.manageDevicesPosition]}>
          <View
            style={[
              styles.iphone1415ProMax1Child,
              styles.manageDevicesPosition,
            ]}
          />
          <Image
            style={styles.layer1Icon}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />

          <Image
            style={[styles.layer1Icon1, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/Title.png")}
          />
          <View style={styles.whiteBackInfo} />
          <Text style={[styles.name, styles.whiteInnerPositions]}>Name:</Text>
          <TextInput style={[styles.nameBox, styles.whiteInnerPositions]} value ={deviceName} onChangeText={(deviceName)=>{setName(deviceName)}} placeholder="Example01"/>
          <Text style={[styles.location, styles.whiteInnerPositions]}> Location:</Text>
          <TextInput style={[styles.locationBox, styles.whiteInnerPositions]} value ={location} onChangeText={(location)=>{setLocation(location)}} placeholder="Backyard"/>
          <Text style={[styles.deviceNumber, styles.whiteInnerPositions]}> Device Number: </Text>
          <TextInput style={[styles.otherInfoBox, styles.whiteInnerPositions]} value ={otherInfo} onChangeText={(otherInfo)=>{setOtherInfo(otherInfo)}} placeholder="Example: 1"/>
          
          <Pressable style={styles.addNew} onPress={() => {
            if(deviceName && deviceName.trim() !== '') { // Check if deviceName is defined and not empty
              checkDeviceExists(deviceName).then((exists) => {
                if (exists) {
                  alert('A device with the same name already exists');
                } else {
                  addDevice(deviceName, location, otherInfo);
                }
              });
            } else {
              alert('Device name cannot be empty');
            }
          }}>
            <Text style={styles.addNew1}>Add Device</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manageDevicesPosition: { // whole screen position
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  burgerMenuPosition: { // title's position
    top: 43,
    position: "absolute",
  },
  groupPosition: { // dont know
    borderTopWidth: 7,
    borderColor: Color.colorDarkorange,
    borderStyle: "solid",
    left: "-8.54%",
    right: "-8.54%",
    width: "117.07%",
    height: "23.33%",
    position: "absolute",
  },
  nameTypo: { // name, location, and device number texts
    height: 42,
    width: 162,
    textAlign: "right",
    color: Color.colorSteelblue_100,
    fontSize: FontSize.size_5xl,
    left: 28,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  boxLayout: { // textboxes, no longer needed for now
    width: 175,
    backgroundColor: Color.colorAliceblue,
    left: 99,
    height: 42,
    //position: "absolute",
  },
  iphone1415ProMax1Child: { // skyblue background
    backgroundColor: Color.colorLightsteelblue,
  },
  layer1Icon: { // Logo
    top: 608,
    left: 135,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax1Item: { //white header
    width: 436,
    height: 90,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: { // probably from header, there are letters in the back
    top: "-11.67%",
    bottom: "88.33%",
  },
  groupItem: { // burger menu probably 
    top: "38.33%",
    bottom: "38.33%",
  },
  groupInner: { // no idea
    top: "88.33%",
    bottom: "-11.67%",
  },
  lineParent: { // no idea
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  burgerMenu: { //burger menu
    left: 20,
    width: 41,
    height: 30,
  },
  layer1Icon1: { // title
    left: 25,
    width: 342,
    height: 27,
    overflow: "hidden",
  },
  whiteBackInfo: { // white background
    top: 120,
    left: 21,
    width: 350,
    height: 450,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  whiteInnerPositions:{
    top: 140,
    left: "9%",
    bottom: 10,
    padding: "5%",
  },
  name: { //name label
    color: Color.colorSteelblue_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    top: 247,
    //left: "5%",
  },
  location: { // location label
    top: 326,
    color: Color.colorSteelblue_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    //left:"4%",
  },
  deviceNumber: { // dev number label
    top: 400,
    color: Color.colorSteelblue_100,
    fontSize: FontSize.size_xl, // size_5x1 previously
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    //left: "4%",

  },
  nameBox: { // name textbox
    //top: 207,
    width: 295,
    backgroundColor: Color.colorAliceblue,
    //left: 19,
    height: 42,
  },
  locationBox: { // loaction textbox
    //top: 270,
    width: 295,
    backgroundColor: Color.colorAliceblue,
    //left: 19,
    height: 42,
  },
  otherInfoBox: { // device number textbox
    //top: 330,
    width: 295,
    backgroundColor: Color.colorAliceblue,
    //left: 19,
    height: 42,
  },
  addNew1: { // 'add new' text
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkorange,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    right: "6%",
    top: -170,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  addNew: {
    top: 675,
    left: 68,
    width: 303,
    height: 54,
    position: "absolute",
  },
  manageDevices: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameAddNewDevice: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameAddNewDevice;
