import React from 'react';
import { Text, Dimensions, StyleSheet, View,ImageBackground} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import cities from './cities';

const Carr = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={4} autoplayLoop autoplayLoopKeepAnimation	 index={2} howPaginations>
      
      {cities.map((evento) => (
          <ImageBackground key={evento.id}source={{uri: evento.image}} style={styles.imagedos}>
        <View style={[styles.child, ]}>
          <Text style={styles.text}>{evento.name}</Text>
        </View>
        </ImageBackground>
      ))}
      
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, 
     
     height: 300,
      width: "100%", 
      paddingBottom:2,
      padding:15,
      marginBottom:10
    },
  child: { width, justifyContent: "center" },
  text: {textAlign: "center", fontSize: 24, backgroundColor: "#69B1DD",color : "white" ,paddingRight:50 },
  imagedos: {
   height:"100%",
  },
});

export default Carr ;