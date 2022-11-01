import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Button from '../components/Button'

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Welcome To Food Paradise</Text>
        <Button mode='custom' onPress={() => navigation.navigate('Login')}>Login</Button>
        <Button mode='custom' onPress={() => navigation.navigate('Register')}>Register</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default StartScreen