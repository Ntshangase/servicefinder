//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import serviceData from './data';


// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList 
                data={serviceData}
                contentInset={{padding: 12,}}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={{marging:20}}>
                            <Text>
                                {item.category}
                            </Text>
                            <Text>
                                {item.name}
                            </Text>
                            <Text>
                                {item.numberCompany}
                            </Text>
                        </TouchableOpacity>
                    )
                } }
            >

            </FlatList>
        </SafeAreaView>
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
