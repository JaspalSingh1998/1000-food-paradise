import React from 'react'
import { Text } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'

const FoodItem = ({ navigation }) => {
  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
    </Background>
  )
}

export default FoodItem