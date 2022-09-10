//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.form} >
            <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text View style={styles.forgotText}>
              Forgot Password?</Text>
            </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home') }
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        height: 40,
        margin: 4,
        borderWidth: 1,
        padding: 5,
        alignItems: "center",
        backgroundColor: "#1BDE3D",
        borderRadius: 20
    },
    form: {
        margin:10,
        paddingTop:windowHeight/4
    },
    forgotText: {
        textAlign: "center",
    justifyContent: "center",
    color: "#1BDE3D"
    }
});

//make this component available to the app
export default Login;
 