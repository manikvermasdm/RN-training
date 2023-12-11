import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import MapView, {Marker} from 'react-native-maps';
import {getLocationPermission} from '../helper/Permissions';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {
  const [region, setregion] = useState(null);
  useEffect(() => {
    getLocationPermission().then(r => {
      if (r) {
        getCurrentLocation();
      } else {
      }
    });
  }, []);

  const getCurrentLocation = () => {
    console.log('getCurrentLocation');
    try {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          console.log(latitude, longitude);
          setregion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0102,
            longitudeDelta: 0.0921,
          });
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
      {region ? (
        <MapView
          style={{height: '100%', width: '100%'}}
          onPress={e => setregion(e.nativeEvent.coordinate)}
          initialRegion={region}>
          <Marker
            // key={index}
            coordinate={region}
            title={'hello'}
            description={'kjsagckjalcgalc'}
            draggable
            onDragEnd={e => setregion(e.nativeEvent.coordinate)}
          />
        </MapView>
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
