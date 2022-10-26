import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="home-outline" size={size} color={color} />;
        }
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="person-outline" size={size} color={color}/>
        }
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator