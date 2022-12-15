//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import serviceData from './data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList 
                data={serviceData}
                contentInset={{padding: 12,}}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{margin:10, height:windowHeight*0.2, backgroundColor:item.bgColor, borderRadius:10 }}>
                            <View>
                            <Text style={styles.category}>
                                {item.category}
                            </Text>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text>
                                {item.numberCompany}
                            </Text>
                            
                            </View>
                            <Image style={{height:135, width:120, position:'absolute', 
                            right:0, margin:10, bottom:0}} source={item.image} />

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
    category: { 
        fontSize:24,
        fontWeight:'200',
        color:'white'
    },
    name: {
        fontSize:18,
    }
});

//make this component available to the app
export default Home;
