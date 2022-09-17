//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';



// create a component
const Details = () => { 

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});

//make this component available to the app
export default Details;
