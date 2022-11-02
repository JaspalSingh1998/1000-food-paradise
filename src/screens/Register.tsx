import React, {useState} from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { signUpUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
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

   const handleClick = () => {
    navigation.navigate('Login')
   }

  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
        <Header>Let's get started!</Header>
        <Paragraph>Create an account to find your new love in food :)</Paragraph>
        <TextInput
            value={name.value} 
            description=""
            errorText={name.error}
            onChangeText={(text) => {
                setName({ value: text, error: '' })
            }} 
            label="Name"/>
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
        <Button loading={loading} onPress={onSignUpPressed} mode='custom'>Sign up</Button>
        <Text style={styles.lead}>Already have an account? <Text style={styles.accent} onPress={handleClick}>Login here</Text></Text>
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
export default Register