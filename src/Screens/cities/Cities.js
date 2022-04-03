import * as React from 'react';
import { Button, View, ScrollView,Text } from 'react-native';
// import PlacesCards from '../components/Cards/placesCards';

export default function Cities({ navigation }) {
  return (
    <>
      <View >
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />

      </View>
      <ScrollView >
          <View>
              <Text>h</Text>
          </View>
        {/* <CitiesCards navigation={navigation} /> */}
      </ScrollView>
    </>
  );
}