import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import firebase from 'firebase/app';
import { firebaseConfig } from './src/core/config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    // <NavigationContainer>  
    //   <TabNavigator />
    //   <StatusBar style="auto" />
    // </NavigationContainer>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});