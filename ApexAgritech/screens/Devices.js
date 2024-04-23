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
    const alertFlag = 0;
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
      if (waterLevelData0 < 0.3 && alertFlag != 1){
        alert('Water level is low for device 1');
        clearInterval(intervalId);
      }
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
        style={[styles.apexTitleIcon]}
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
      
        <View style={[styles.coop1Child, styles.lineParentPosition]} 
          // ---------- COOP 1 ---------- //
        />
        <Text style={[styles.coop11, styles.coopTypo]}>Coop #1</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text, styles.textClr]}>{temperatureData0}°</Text>
          <Text style={[styles.waterLevelTypo]}>
            Temperature
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.text1, styles.textClr]}>{waterLevelData0}</Text>
          <Text style={[styles.waterLevelTypo]}>
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
        <Text style={[styles.coop21, styles.coopTypo2]}>Coop #2</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.textTypo]}>{waterLevelData1}</Text>
          <Text style={[styles.waterLevel1, styles.waterLevel1Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[styles.groupViewPosition]}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.textTypo]}>{temperatureData1}°</Text>
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
        <Text style={[styles.coop31, styles.coopTypo3]}>Coop #3</Text>
        <View style={styles.rectangleContainer2}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.textTypo2]}>{waterLevelData2}</Text>
          <Text style={[styles.waterLevel2Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[ styles.groupViewPosition]}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.textTypo2]}>{temperatureData2}°</Text>
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
        <Text style={[styles.addNew1, styles.textClrAddNew]}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  devicePosition: {  // whole background (white header, skyblue background)
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
    overflow: "visible",
    position: "absolute",
  },
  coopLayout: {
    height: 141,
    width: 331,
    position: "absolute",
  },
  lineParentPosition: { // coops 1,2,3 white backgroung
    left: "0%",
    bottom: "0%",
    top: "-40%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
    height: "75%",
  },
  coopTypo: { //coop names
    textAlign: "center",
    color: Color.colorDarkorange,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_13xl,
    left: "3.32%",
    height: "30.91%",
    position: "absolute",
    top: -20,
  },

  coopTypo2: {
    textAlign: "center",
    color: Color.colorDarkorange,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_13xl,
    left: "3.32%",
    height: "30.91%",
    position: "absolute",
    top: -20,
  },
  coopTypo3:{
    textAlign: "center",
    color: Color.colorDarkorange,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_13xl,
    left: "3.32%",
    height: "30.91%",
    position: "absolute",
    top: -20,
  },
  groupChild1Position: { //Temperature and Water level box positions
    backgroundColor: Color.colorAliceblue,
    left: "0%",
    bottom: "0%",
    top: -70,
    height: "90%",
    position: "absolute",
  },
  textClr: { // coop 1 temp and water lvl output
    color: Color.colorSteelblue_100,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.k2DExtraLight,
    overflow: "hidden",
    top: -40,
  },
  textClrAddNew: { // Add New text position and size
    color: Color.colorSteelblue_100,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.k2DExtraLight,
    overflow: "hidden",
    top: -160,
  },
  waterLevelTypo: { //  Coop 1 temp and water Text position and size 
    fontSize: FontSize.size_3xs,
    top: -65,
    height: "16.09%",
    left: "12.64%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: { // Degrees text (coop 2)
    bottom: "96.44%",
    left: "3%",
    width: "100%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_5xl,
    height: "47.13%",
    textAlign: "center",
    position: "absolute",
  },
  textTypo2: { // Degrees text (coop 3)
    bottom: "96.44%",
    left: "3%",
    width: "100%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_5xl,
    height: "47.13%",
    textAlign: "center",
    position: "absolute",
  },
  waterLevel1Typo: { // Temp and water level labels (coop 2 and 3)
    top: "-75.00%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "center",
    position: "absolute",
  },
  groupViewPosition: { //Coop 2 and 3 temp boxes
    left: "52.68%",
    bottom: "19.15%",
    width: "22.20%",
    top: "19.15%",
    height: "61.7%",
    position: "absolute",
  },
  waterLevel2Typo: { // Coop 3 temp and water lvl labels 
    top: "-72%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "center",
    position: "absolute",
    left: "5%",
    width: "89.66%",
  },
  deviceLayourBackChild: { // Background skyblue
    backgroundColor: Color.colorLightsteelblue,
    height: 932,
  },
  deviceLayourBackItem: { // white header
    height: 90,
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
  logoIcon: { // logo
    top: 608,
    left: 135,
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
  rectangleParent: { // coop 1 temp lvl blue box
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
    fontSize: FontSize.size_5xl,
    bottom: "105%",
    height: "47.13%",
    color: Color.colorSteelblue_100,
    position: "absolute",
    textAlign: "center",
  },
  waterLevel: { // coop 1 water level text
    width: "88.14%",
    left: "5.08%",
    top: "105%",
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
  coop21: { // coop 2 (coop #2)
    width: "47.43%",
    top: "32.62%",
  },
  coop31:{ // Coop 3 text
    width:"47.43%",
    top:"32.62%",
  },

  waterLevel1: { // coop 2 water level text
    left: "5%",
    width: "89.66%",
    top: "9.12%",
  },
  rectangleContainer: { // coop 2 and 3 Water lvl boxes CHANGE FOR COOP 2 ONLY, CREATE ONE FOR COOP 3, RENAME IT IF NECESSARY
    left: "76.44%",
    bottom: "19.15%",
    top: "19.15%",
    right: "6.04%",
    width: "22.52%",
    height: "61.7%",
    position: "absolute",
  },
  rectangleContainer2: { // coop 2 and 3 Water lvl boxes CHANGE FOR COOP 2 ONLY, CREATE ONE FOR COOP 3, RENAME IT IF NECESSARY
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
    top: 310,
    left: 30,
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
    top: 445,
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
