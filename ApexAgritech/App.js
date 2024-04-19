import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddDevice from './screens/AddDevice';
import Signup from './screens/Signup';
import Devices from './screens/Devices';
import Account from './screens/Account';
import FAQ from './screens/FAQ';
import Support from './screens/Support';
import SignIn from './screens/SignIn';
import { useState, useEffect } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './components/config';
import { createDrawerNavigator } from '@react-navigation/drawer';


function SignInNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Sign In')}
        title="Go to sign in"
      />
    </View>
  );
}

function DevicesNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Devices')}
        title="Go to your devices"
      />
    </View>
  );
}
function AddDeviceNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Add Device')}
      />
    </View>
  );
}

function AccountNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Account Info')}
      />
    </View>
  );
}

function FaqNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('FAQ')}
      />
    </View>
  );
}
function SupportNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Support')}
      />
    </View>
  );
}
function SignUpNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Sign Up')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sign In">
        <Drawer.Screen name="Sign In" component={SignIn} />
        <Drawer.Screen name="Devices" component={Devices} />
        <Drawer.Screen name="Add a Device" component={AddDevice} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Sign Up" component={Signup} />
        <Drawer.Screen name="FAQ" component={FAQ} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4CDEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 100,
  },
});
