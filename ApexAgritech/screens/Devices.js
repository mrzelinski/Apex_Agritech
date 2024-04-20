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
import { set, ref, onValue, off, on } from 'firebase/database';
import { db } from '../components/config';


const FrameDeviceLayout = () => {
  const [waterLevelData0, setWaterLevelData0] = useState(null); 
  const [waterLevelData1, setWaterLevelData1] = useState(null); 
  const [waterLevelData2, setWaterLevelData2] = useState(null); 
  const [temperatureData0, setTemperatureData0] = useState(null); 
  const [temperatureData1, setTemperatureData1] = useState(null); 
  const [temperatureData2, setTemperatureData2] = useState(null); 
  const navigation = useNavigation();



  function readData0() {
    const temperatureRef = ref(db, 'devices/0/temperature'); 
    const water_levelRef = ref(db, 'devices/0/water_level');
    const extract = (refString) => {
      const lastIndex = refString.lastIndexOf('/');
      return refString.substring(lastIndex + 1);
    };
    const handleTemperatureData = (temperatureSnapshot) => {
      const temperatureData0 = temperatureSnapshot.val();
      setTemperatureData0(temperatureData0);
    };
    const handleWaterLevelData = (waterLevelSnapshot) => {
      const waterLevelData0 = waterLevelSnapshot.val();
      setWaterLevelData0(waterLevelData0);
      //alert(waterLevelData0); 
    };
    // Fetch starting data
    onValue(temperatureRef, handleTemperatureData);
    onValue(water_levelRef, handleWaterLevelData);
    const intervalId = setInterval(() => {
      onValue(temperatureRef, handleTemperatureData);
      onValue(water_levelRef, handleWaterLevelData);
    }, 1000); 
  }
  
  function readData1() {
    const temperatureRef = ref(db, 'devices/1/temperature'); 
    const water_levelRef = ref(db, 'devices/1/water_level');
    const extract = (refString) => {
      const lastIndex = refString.lastIndexOf('/');
      return refString.substring(lastIndex + 1);
    };
    const handleTemperatureData = (temperatureSnapshot) => {
      const temperatureData1 = temperatureSnapshot.val();
      setTemperatureData1(temperatureData1);
    };
    const handleWaterLevelData = (waterLevelSnapshot) => {
      const waterLevelData1 = waterLevelSnapshot.val();
      setWaterLevelData1(waterLevelData1);
    };
    onValue(temperatureRef, handleTemperatureData);
    onValue(water_levelRef, handleWaterLevelData);
    const intervalId = setInterval(() => {
      onValue(temperatureRef, handleTemperatureData);
      onValue(water_levelRef, handleWaterLevelData);
    }, 1000); 
  }
  function readData2() {
    const temperatureRef = ref(db, 'devices/2/temperature'); 
    const water_levelRef = ref(db, 'devices/2/water_level');
    const extract = (refString) => {
      const lastIndex = refString.lastIndexOf('/');
      return refString.substring(lastIndex + 1);
    };
    const handleTemperatureData = (temperatureSnapshot) => {
      const temperatureData2 = temperatureSnapshot.val();
      setTemperatureData2(temperatureData2);
    };
    const handleWaterLevelData = (waterLevelSnapshot) => {
      const waterLevelData2 = waterLevelSnapshot.val();
      setWaterLevelData2(waterLevelData2);
    };
    onValue(temperatureRef, handleTemperatureData);
    onValue(water_levelRef, handleWaterLevelData);
    const intervalId = setInterval(() => {
      onValue(temperatureRef, handleTemperatureData);
      onValue(water_levelRef, handleWaterLevelData);
    }, 1000); 
  }
  
  
  return (
    <View style={styles.frameDeviceLayout}>
      <View style={[styles.deviceLayourBack, styles.devicePosition]}>
        <View style={[styles.deviceLayourBackChild, styles.devicePosition]} />
        <View style={[styles.deviceLayourBackItem, styles.devicePosition]} />
      </View>

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
      <TouchableOpacity
        style={[styles.coop1, styles.coopLayout]}
        activeOpacity={0.2}
        onPress={readData0}
      >
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop11, styles.coopTypo]}>Coop #1</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text, styles.textClr]}>{temperatureData0}°</Text>
          <Text style={[styles.temperature, styles.waterLevelTypo]}>
            Temperature
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.text1, styles.textClr]}>{waterLevelData0}</Text>
          <Text style={[styles.waterLevel, styles.waterLevelTypo]}>
            Water Level
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.coop2, styles.coopLayout]}
        activeOpacity={0.2}
        onPress={readData1}
      >
      
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop21, styles.coopTypo]}>Coop #2</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>{waterLevelData1}</Text>
          <Text style={[styles.waterLevel1, styles.waterLevel1Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>{temperatureData1}°</Text>
          <Text style={[styles.temperature1, styles.waterLevel1Typo]}>
            Temperature
          </Text>
        </View>
      </TouchableOpacity>
      <Pressable
        style={[styles.coop3, styles.coopLayout]}
        onPress={readData2}
      >
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop21, styles.coopTypo]}>Coop #3</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>{waterLevelData2}</Text>
          <Text style={[styles.waterLevel2, styles.waterLevel2Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupViewPosition]}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.text5, styles.textTypo]}>{temperatureData2}°</Text>
          <Text style={[styles.temperature2, styles.waterLevel2Typo]}>
            Temperature
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.addNew}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Add a Device')}
        >
        <Text style={[styles.addNew1, styles.textClr]}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  devicePosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
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
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  coopLayout: {
    height: 141,
    width: 331,
    position: "absolute",
  },
  lineParentPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  coopTypo: { //coop names
    textAlign: "left",
    color: Color.colorDarkorange,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_21xl,
    left: "3.32%",
    height: "31.91%",
    position: "absolute",
  },
  groupChild1Position: { //Temperature and Water level box positions
    backgroundColor: Color.colorAliceblue,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  waterLevelTypo: { //  Coop 1 temp and water Text position and size 
    fontSize: FontSize.size_3xs,
    top: "9.2%",
    height: "16.09%",
    left: "12.64%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: { // Degrees text (coop 2 and 3)
    bottom: "16.44%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    height: "47.13%",
    textAlign: "center",
    position: "absolute",
  },
  waterLevel1Typo: { // Temp and water level (coop 2 and 3)
    top: "15.34%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "center",
    position: "absolute",
  },
  groupViewPosition: { //Coop 2 and 3 temp boxes
    left: "54.68%",
    bottom: "19.15%",
    top: "19.15%",
    height: "61.7%",
    position: "absolute",
  },
  waterLevel2Typo: { // Coop 3 temp and water lvl texts 
    top: "12.64%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  deviceLayourBackChild: { // Background skyblue 3/4
    backgroundColor: Color.colorLightsteelblue,
    height: 932,
  },
  deviceLayourBackItem: { // uper side of skyblue background 1/4
    height: 120,
    backgroundColor: Color.colorWhite,
  },
  deviceLayourBack: { //idk
    height: 932,
  },
  groupChild: { //idk probably from burger menu
    top: "-11.67%",
    bottom: "88.33%",
  },
  groupItem: { // idk probably from burger menu
    top: "38.33%",
    bottom: "38.33%",
  },
  groupInner: { // idk probably from burger menu
    top: "88.33%",
    bottom: "-11.67%",
  },
  burgerMenu: { // this is no longer needed 
    left: 10,
    width: 36,
    height: 30,
    top: 43,
    position: "absolute",
  },
  apexTitleIcon: { // apex title position
    left: 25,
    width: 342,
    height: 27,
    top: 43,
  },
  logoIcon: { // idk
    top: 788,
    left: 149,
    width: 128,
    height: 103,
  },
  coop1Child: { // coops rectangle
    backgroundColor: Color.colorWhite,
  },
  coop11: { // coop 1 text (coop #1)
    width: "44.41%",
    top: 45,
  },
  rectangleView: { // blue boxes from coop 1: temp, coop 2: temp and wtr, coop 3: wtr 
    right: "0%",
    backgroundColor: Color.colorAliceblue,
    width: "100%",
  },
  text: { //coop 1 temp lvl
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    bottom: "15.29%",
    height: "47.13%",
    color: Color.colorSteelblue_100,
    position: "absolute",
    left: "4.62%",
    width: "91.38%",
    textAlign: "center",
  },
  temperature: { //coop 1 temperature text
    left: "20.72%",
    width: "95.28%",
  },
  rectangleParent: { //idk yet
    right: "28.1%",
    left: "52.38%",
    bottom: "22.7%",
    top: "15.6%",
    height: "61.7%",
    width: "22.52%",
    position: "absolute",
  },
  groupChild1: { // coop 2 water lvl blue box
    width: "98.31%",
    right: "1.69%",
  },
  text1: { // coop 1 water level value
    //right: "1.17%",
    width: "100%",
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    bottom: "15.29%",
    height: "47.13%",
    color: Color.colorSteelblue_100,
    position: "absolute",
    textAlign: "center",
  },
  waterLevel: {
    width: "88.14%",
    left: "5.08%",
  },
  rectangleGroup: { // coop 1 water level box
    left: "76.13%",
    right: "6.04%",
    width: "22.82%",
    bottom: "22.7%",
    top: "15.6%",
    height: "61.7%",
    position: "absolute",
  },
  coop1: { // coop 1 white rectangle
    top: 177,
    left: 30, //53
  },
  coop21: { // coop 2 and 3 texts (coop #2)
    width: "47.43%",
    top: "32.62%",
  },
  text2: { // celsius symbol coop 2 
    left: "8.62%",
    width: "91.38%",
  },
  waterLevel1: { // coop 2 water level text
    left: "5%",
    width: "89.66%",
  },
  rectangleContainer: { // coop 2 and 3 Water lvl boxes
    left: "76.44%",
    bottom: "19.15%",
    top: "19.15%",
    right: "6.04%",
    width: "22.52%",
    height: "61.7%",
    position: "absolute",
  },
  temperature1: { // coop 2 temp text
    left: "1.72%",
    width: "98.28%",
  },
  groupView: { // coop 2 temp box, I cant modify the right/left position, idk why, there is no visible changes
    right: "27.79%",
    left: "54.68%",
    width: "20.52%",
  },
  coop2: { // coop 2 white box (moves everythin inside it)
    top: 348,
    left: 30,
  },
  waterLevel2: { // coop 3 water lvl text, somehow
    left: "12.17%",
    width: "89.66%",
  },
  text5: { // coop 3 temp value, ...
    left: "5.47%",
    width: "89.83%",
    textAlign: "center",
  },
  temperature2: { // coop 3 temp text position
    width: "96.61%",
    left: "3.39%",
  },
  rectangleParent2: { // coop 3 temp box
    right: "27.49%",
    width: "20.82%",
    left: "54.68%",
  },
  coop3: { // coop 3 white box (moves everythin inside it)
    top: 519,
    left: 30,
  },
  addNew1: { //'add new' text
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    width: '100%',
    height: 28,
    left: -15, // preferred to move the position here and not below 
  },
  addNew: { 
    left: 169,
    top: 690,
    position: "absolute",
  },
  frameDeviceLayout: { //idk
    flex: 1,
    height: 932,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FrameDeviceLayout;
