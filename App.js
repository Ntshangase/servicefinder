import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';
import About from './src/About';
import Details from './home/Details';
import * as firebase from '/home/mntwana/servicefinder/firebase@8.2.3';
import firebaseConfig from './src/firebaseConfig';

const Stack = createNativeStackNavigator();
 
console.log("firebase not connected");
export default function App() { 

  if(!firebase.apps.length) {
    console.log("Connected to Firebase")
    firebase.inintializeApp(firebaseConfig);
  }
 
  return (
    <NavigationContainer>

      <Stack.Navigator> 
      <Stack.Screen name="About" component={About} 
      options={{
        headerStyle: {
          backgroundColor: '#1BDE3D',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />

      <Stack.Screen name="Login" component={Login} 
      options={{
        headerStyle: {
          backgroundColor: '#1BDE3D',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerStyle: {
          backgroundColor: '#1BDE3D',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Details" component={Details} 
      options={{
        headerStyle: {
          backgroundColor: '#1BDE3D',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
     </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434DBF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
