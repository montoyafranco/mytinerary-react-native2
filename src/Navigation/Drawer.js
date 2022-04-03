import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/home/home';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      
    </Drawer.Navigator>

  );
}