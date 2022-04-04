import * as React from 'react';
import { Button, View, ScrollView,Text } from 'react-native';
// import PlacesCards from '../components/Cards/placesCards';
import CitiesCards from '../../components/CitiesCards';

export default function Cities({ navigation }) {
  return (
    <>
      <View style={{width:"30%",display :"flex" ,height:"30%"}} >
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
          
        />

      </View>
      <ScrollView >
          <View>
              <Text>h</Text>
          </View>
        <CitiesCards />
      </ScrollView>
    </>
  );
}