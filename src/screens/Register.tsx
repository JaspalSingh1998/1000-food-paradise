import React, {useState} from 'react'
import { Text, SafeAreaView } from 'react-native'
import { signUpUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { emailValidator } from '../helpers/emailValidator'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'

const Register = ({navigation}) => {
   const [name, setName] = useState({value: '', error: ''})
   const [email, setEmail] = useState({value: '', error: ''})
   const [password, setPassword] = useState({value: '', error: ''})
   const [loading, setLoading] = useState(false)

   const onSignUpPressed = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value)
        const nameError = nameValidator(name.value);

        if(emailError || passwordError || nameError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error: passwordError})
            setName({...name, error: nameError})
        }
        setLoading(true)
        const response = await signUpUser({
            name: name.value,
            email: email.value,
            password: password.value
        })

        if(response.error) {
            alert(response.error)
        } else {
            navigation.replace('Home')
        }

        setLoading(false)
   } 

  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
        <Header>Welcome</Header>
        <TextInput
            value={name.value} 
            description=""
            errorText={name.error}
            onChangeText={(text) => {
                setName({ value: text, error: '' })
            }} 
            label="Email"/>
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
        <Button loading={loading} onPress={onSignUpPressed}>Sign up</Button>
    </Background>
  )
}

export default Register