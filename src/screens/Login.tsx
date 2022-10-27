import React, {useState} from 'react'
import { Text, StyleSheet, Alert } from 'react-native'
import { loginUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import TextInput from '../components/TextInput'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

const Login = ({navigation}) => {
   const [email, setEmail] = useState({value: '', error: ''})
   const [password, setPassword] = useState({value: '', error: ''})
   const [loading, setLoading] = useState(false)

   const onLoginPressed = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value)
        if(emailError || passwordError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error: passwordError})
        }

        setLoading(true)

        const response = await loginUser({
            email: email.value,
            password: password.value
        })

        if(response.error) {
            alert(response.error)
        }

        setLoading(false)
   } 

   const handleClick = () => {
    navigation.navigate('Register')
   }

  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
        <Header>Login</Header>
        <Paragraph>Welcome to Food Paradise. Your heaven to keep your tummy happy :)</Paragraph>
        <TextInput
            value={email.value} 
            description=""
            errorText={email.error}
            onChangeText={(text) => {
                setEmail({ value: text, error: '' })
            }} 
            label="Email"/>
        <TextInput value={password.value} 
        onChangeText={(text) => {
            setPassword({ value: text, error: '' })
        }} placeholder="Password" secureTextEntry/>
        <Button loading={loading} onPress={onLoginPressed} mode='custom'>Login</Button>
        <Text style={styles.lead}>No account yet? <Text style={styles.accent} onPress={handleClick}>Register here</Text></Text>
    </Background>
  )
}

const styles = StyleSheet.create({
    lead: {
        fontSize: 12,
        marginTop: 42
    },
    accent: {
        color: '#F9A417'
    }
})

export default Login