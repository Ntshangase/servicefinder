//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import serviceList from './serviceList';
import Loader from '../src/Loader';



// create a component
const Details = () => { 

    const [location, setLocation] = useState(null);
    const companies = serviceList;

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

      const RenderMarker =() =>{
        return(
            <View>
                { 
                    companies.map((maker, index) =>{ 
                        return(
                            <Marker 
                                key={index}
                                coordinate={{latitude:maker.coords["latitude"], longitude:maker.coords["longitude"]}}
                                title={maker.name}
                                //image={maker.avatar}
                                 
                            />
                        )
                     }
                    )
                }
            </View>
                 
        )
      }

      return (
        <View style={styles.container}>
            { companies != null
                ?<MapView style={styles.map}
                initialRegion={{
                    latitude: -26.107567,
                    longitude: 28.056702,
                    latitudeDelta: 25,
                    longitudeDelta: 23,
                  }}
                showsUserLocation={true}
            >
                <RenderMarker></RenderMarker>
            </MapView>
                : <Loader />
            }
            
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
