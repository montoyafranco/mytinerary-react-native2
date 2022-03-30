
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
import Navbar from '../navbar/navbar';
import Carr from '../carrousel/carrousel';
import React from 'react'
import Hero from '../imagebackground/imageBackground';

function Home(){
  return(
    <ScrollView>
      
      <Navbar/>
      <Hero />
      <Carr/>
    </ScrollView>
  )
}



export default Home