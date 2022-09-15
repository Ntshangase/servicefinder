//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';

// create a component
const About = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.show}>
            <View style={styles.container}>
                <Text>Welcome to the Service Finder App
                </Text>
                <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login') }
      >
        <Text>Login</Text>
      </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    show: {
        flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    },
    button: {
        height: 40,
        width:120,
        margin: 20,
        borderWidth: 2,
        padding: 5,
        alignItems: "center",
        backgroundColor: "#1BDE3D",
        borderRadius: 20
    },
});

//make this component available to the app
export default About;
