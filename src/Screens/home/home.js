
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
// import Navbar from '../../components/navbar';
import Carr from '../../components/carr';
import React from 'react'
import Hero from '../../components/hero';


function Home({ navigation }){
  return(
    <ScrollView>
      <ImageBackground style={{flex:1}} source={require("../../../assets/images/fondo-combi2.png")}>
      {/* <Navbar/> */}
      <Hero />
      <View >
        <Button
          onPress={() => navigation.navigate('Cities')}
          title="Cities"
          color="#69B6DD"
        />

      </View>
      <Carr/>
      
      </ImageBackground> 
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});


export default Home