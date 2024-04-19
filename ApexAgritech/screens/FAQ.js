import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  Image,
  Alert
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameFAQ = () => {
    const navigation = useNavigation();
    const a1 = () => {
      Alert.alert(
        "Add a Device",
        "To add a device, go to the 'add device' page and fill out the form. Afterwards click 'create device'. If the device is added, an alert will display."
      );
    };
    const a2 = () => {
      Alert.alert(
        "View Devices",
        "To view a device, go to the 'devices' page, and enjoy all your device's data"
      );
    };
    const a3 = () => {
      Alert.alert(
        "Change Device's settings",
        "To edit a device's settings, simply navigate to the 'devices' page and then tap on the device you wish to edit. Then fill out the form to the values you want the device to have, and tap submit"
      );
    };
    const a4 = () => {
      Alert.alert(
        "BOOlean",
        "C'mon that was good"
      );
    };
    const a5 = () => {
      Alert.alert(
        "Connect a Device",
        "To connect a device is a very important step, and is being worked on. This will be ironed out in the final presentation, with full functionality"
      );
    };
    const a6 = () => {
      Alert.alert(
        "Remove a Device",
        "To remove a device, navigate to the 'devices' page. Then tap on the device you would like to remove, and click 'remove'."
      );
    };
    const a7 = () => {
      Alert.alert(
        "How to signup",
        "To signup, navigate to the 'signup' page, and fill out the form to make a new account. However, each account will require seperate emails, and usernames"
      );
    };
    const a8 = () => {
      Alert.alert(
        "Can I have more than 3 devices?",
        "Unfortunately, during the prototype phase only three devices are supported per account. However, you can have as many accounts as you would like, you only need a seperate email for each account"
      );
    };
    

  return (
    <View style={styles.frameFaq}>
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
          <TouchableHighlight
            style={[styles.burgerMenu, styles.burgerMenuPosition]}
            underlayColor="#fff"
            onPress={() => navigation.navigate("FrameMenuFAQ")}
          >
            <View style={[styles.lineParent, styles.question1Position]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.groupInner, styles.groupPosition]} />
            </View>
          </TouchableHighlight>
          <Image
            style={[styles.layer1Icon1, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/Title.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <View style={[styles.question, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a1}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I add a device?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question3, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a2}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I view my devices?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question6, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a3}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I edit my device's settings?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question9, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a4}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                What is the scariest data-type?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question12, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a5}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I connect to my device?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question15, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a6}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
               How do I remove a device?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question18, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a7}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I signup?
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question21, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={a8}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                How do I change a device's name?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manageDevicesPosition: {
    width: 430,
    left: -8,
    top: -10,
    position: "absolute",
    height: 932,
  },
  burgerMenuPosition: {
    top: 73,
    position: "absolute",
  },
  question1Position: {
    left: "0%",
    top: "0%",
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
  questionLayout: {
    height: 46,
    width: 303,
    left: 57,
    position: "absolute",
  },
  question2Layout: {
    height: "100%",
    width: "100%",
  },
  iphone1415ProMax1Child: {
    backgroundColor: Color.colorLightsteelblue,
  },
  layer1Icon: {
    top: 788,
    left: 145,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax1Item: {
    width: 436,
    height: 120,
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
    height: "100%",
    width: "100%",
  },
  burgerMenu: {
    left: 20,
    width: 41,
    height: 30,
  },
  layer1Icon1: {
    left: 65,
    width: 342,
    height: 27,
    overflow: "hidden",
  },
  iphone1415ProMax1Inner: {
    top: 193,
    left: 29,
    width: 367,
    height: 568,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  question2: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  question: {
    top: 232,
  },
  question3: {
    top: 294,
  },
  question6: {
    top: 356,
  },
  question9: {
    top: 418,
  },
  question12: {
    top: 477,
  },
  question15: {
    top: 536,
  },
  question18: {
    top: 595,
  },
  question21: {
    top: 654,
  },
  manageDevices: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameFaq: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameFAQ;
