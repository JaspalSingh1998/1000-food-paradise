import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import AuthLoading from '../screens/AuthLoading';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AuthLoading">
            <Stack.Screen name="AuthLoading" component={AuthLoading}/>
            <Stack.Screen name="Start" component={StartScreen}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={TabNavigator}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;