import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/home/home';
import Cities from '../Screens/cities/Cities'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cities" component={Cities} />
      
    </Drawer.Navigator>

  );
}