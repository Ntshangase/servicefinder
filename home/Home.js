//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// create a component
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434DBF ',
    },
});

//make this component available to the app
export default Home;
