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
            source={require("../assets/Title.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />

          <Image
            style={[styles.layer1Icon1, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/Title.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
          <Text style={[styles.location, styles.nameTypo]}> Location:</Text>
          <Text style={[styles.deviceNumber, styles.nameTypo]}>
            Device Number:
          </Text>

          <TextInput style={[styles.nameBox, styles.boxLayout]} value ={deviceName} onChangeText={(deviceName)=>{setName(deviceName)}} placeholder="Example01"/>
          <TextInput style={[styles.locationBox, styles.boxLayout]} value ={location} onChangeText={(location)=>{setLocation(location)}} placeholder="Backyard"/>
          <TextInput style={[styles.otherInfoBox, styles.boxLayout]} value ={otherInfo} onChangeText={(otherInfo)=>{setOtherInfo(otherInfo)}} placeholder="Chickens, Quail, Geese"/>
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
            <Text style={styles.addNew1}>Add New Device</Text>
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
    left: 18,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  boxLayout: { // textboxes
    width: 175,
    backgroundColor: Color.colorAliceblue,
    left: 199,
    height: 42,
    position: "absolute",
  },
  iphone1415ProMax1Child: { // skyblue background
    backgroundColor: Color.colorLightsteelblue,
  },
  layer1Icon: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax1Item: { //white header
    width: 436,
    height: 120,
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
  iphone1415ProMax1Inner: { // white background
    top: 166,
    left: 11,
    width: 370,
    height: 559,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  name: {
    top: 307,
  },
  location: {
    top: 376,
  },
  deviceNumber: {
    top: 431,
  },
  nameBox: {
    top: 307,
  },
  locationBox: {
    top: 376,
  },
  otherInfoBox: {
    top: 445,
  },
  addNew1: { // 'add new' text
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkorange,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    right: "5%",
    top: "0%",
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
