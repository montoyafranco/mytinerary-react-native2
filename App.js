import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button,ImageBackground } from 'react-native';
/* import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'; */
import React from 'react';
import Home from './components/home/home';

export default function App() {
  return (
    <ScrollView style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <ImageBackground style={{flex:1}} source={require("./assets/images/fondo-combi.png")}>
      <StatusBar style="auto"  />
      <Home/>

      
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});