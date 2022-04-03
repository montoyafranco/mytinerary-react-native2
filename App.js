import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button,ImageBackground } from 'react-native';
/* import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'; */
import React from 'react';
import Home from './src/Screens/home/home';
import { createStore, applyMiddleware } from 'redux';
import{Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from './redux/reducers/mainReducer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/Drawer';

export default function App() {
  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))
  return (
    <Provider store={reduxStore}  style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <NavigationContainer>
   
      
      <StatusBar style="auto"  />
      
      <DrawerNavigator style={{ backgroundColor: 'red' }}/>

      
   
      
    </NavigationContainer>
    </Provider>
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