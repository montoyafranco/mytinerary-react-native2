import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button ,Image} from 'react-native';
// import Button1 from './buttonHome';

function Hero() {
  return (
    <ScrollView>
      <View style={styles.containerImage}>
        {/* <ImageBackground source={require('../../assets/images/fondo3.jpg')} style={styles.image}> */}
          <Text style={styles.tittle}>Mytinerary ✈</Text>
          <View >
            <Image  style={[{ width: "100%", margin: 0}]} source={require("../../assets/images/mapa-mundi.gif") }></Image>
          </View>
         
          <View style={styles.container}>
          {/* <View style={[{ width: "20%", margin: 10, backgroundColor: "#ff6536", fontSize: 30 }]}>
              <Button
                title="Cities"
                color="#69B6DD"
                size={30}
                fontSize={30}
              />
            </View> */}

            
          </View>
        {/* </ImageBackground> */}
        <Text style={styles.text2}>Find your perfect trip, designed by insiders who know and love their cities</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    height: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
  tittle: {
    flex: 1,
    marginLeft:59,
    fontSize: 40,
    justifyContent:"center",
    color: "white"
    
  },
  text: {
    fontSize: 25,
    textAlign: 'center'
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom:100
  },
  image: {
    height: '100%'
  },
  container: {
    flex: 1,
    height: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
});

export default Hero