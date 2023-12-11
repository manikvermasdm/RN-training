import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {getLocationPermission} from '../helper/Permissions';

const Home = () => {
  console.log(Config.GOOGLE_MAPS_API_KEY, 'api key');
  const [region, setregion] = useState({
    latitude: 30.70825,
    longitude: 76.7324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const getCurrentLocation = () =>
  //   new Promise((resolve, reject) => {
  //     Geolocation.getCurrentPosition(
  //       position => {
  //         const cords = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           heading: position?.coords?.heading,
  //         };
  //         resolve(cords);
  //       },
  //       error => {
  //         reject(error.message);
  //       },
  //       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //     );
  //   });

  const getCurrentLocation = () => {
    console.log('getCurrentLocation');
    try {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          console.log(latitude, longitude);
          setregion({latitude, longitude});
        },
        error => {
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocationPermission().then(r => {
      if (r) {
        getCurrentLocation();
      } else {
      }
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="#000" />
      <Text
        style={{
          fontSize: 24,
          marginTop: 20,
          fontFamily: 'TitanOne-Regular',
        }}>
        MAPS, CURRENT LOCATION, API KEYS
      </Text>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={region}
        onPress={e => setregion(e.nativeEvent.coordinate)}>
        <Marker
          coordinate={region}
          draggable
          onDragEnd={e => setregion(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
