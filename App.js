import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator> 
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
