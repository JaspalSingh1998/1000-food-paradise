import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>StartScreen</Text>
        <Button title='Login' onPress={() => navigation.navigate('Login')}/>
        <Button title='Register' onPress={() => navigation.navigate('Register')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default StartScreen