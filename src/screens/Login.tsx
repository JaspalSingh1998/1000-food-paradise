import React, {useState} from 'react'
import { Text, SafeAreaView } from 'react-native'
import { loginUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
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

  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
        <Header>Welcome</Header>
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
        <Button loading={loading} onPress={onLoginPressed}>Login</Button>
    </Background>
  )
}

export default Login