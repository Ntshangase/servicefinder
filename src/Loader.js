//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1BDE3D" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default Loader;
