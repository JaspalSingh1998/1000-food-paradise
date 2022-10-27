import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { logoutUser } from '../api/auth-api'
import Button from '../components/Button'

const Home = () => {
  return (
    <SafeAreaView>
        <Text>Home</Text>
        <Button mode="contained" onPress={() => logoutUser()}>Logout</Button>
    </SafeAreaView>
  )
}

export default Home