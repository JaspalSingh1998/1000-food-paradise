import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import TextInput from '../components/TextInput'
import Btn from '../components/Button'
import { Text } from 'react-native'

const Checkout = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState({value: '', error: ''})
  const [holderName, setHolderName] = useState({value: '', error: ''})
  const [expiry, setExpiry] = useState({value: '', error: ''})
  const [cvv, setCvv] = useState({value: '', error: ''})

  const handlePay = () => {
    alert('Thanks For Shopping with us!!')
  }

  return (
    <Background>
        <BackButton goBack={navigation.goBack}/>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>$140</Text>
        <Text style={{ fontSize: 18, color: 'grey'}}>Credit Card Payment</Text>       
        <TextInput
            value={cardNumber.value} 
            description=""
            errorText={cardNumber.error}
            onChangeText={(text) => {
                setCardNumber({ value: text, error: '' })
            }} 
            label="Card Number"/> 
        <TextInput
            value={holderName.value} 
            description=""
            errorText={holderName.error}
            onChangeText={(text) => {
                setHolderName({ value: text, error: '' })
            }} 
            label="Cardholder Name"/> 
        <TextInput
            value={expiry.value} 
            description=""
            errorText={expiry.error}
            onChangeText={(text) => {
                setExpiry({ value: text, error: '' })
            }} 
            label="Card Expiry"/> 
        <TextInput
            value={cvv.value} 
            description=""
            errorText={cvv.error}
            onChangeText={(text) => {
                setCvv({ value: text, error: '' })
            }} 
            label="CVV"/> 

        <Btn onPress={handlePay} mode='custom'>Pay Now</Btn>
    </Background>
  )
}

export default Checkout