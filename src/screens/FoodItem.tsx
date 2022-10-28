import React from 'react'
import { Text, Image, View, Button, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import Btn from '../components/Button'
const FoodItem = ({ navigation }) => {

  const addToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
        <BackButton goBack={navigation.goBack}/>
            <Image source={require('../assets/burger.png')} style={styles.foodImage}/>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.itemName}>XYZ Burger</Text>
                    <Text style={styles.itemLocation}>XYZ Location</Text>
                    <Text style={styles.itemType}>Fast Food</Text>
                </View>
                <View>
                    <Text style={styles.itemPrice}>$62.50</Text>
                    <View style={styles.countContainer}>
                        <Button title='-' />
                        <Text>1</Text>
                        <Button title='+' />
                    </View>
                </View>
            </View>
            <Paragraph style={styles.description}>
                Made with premium, flame-grilled 100% Canadian Angus beef. It is sure to make your taste buds happy. Served with your 
                choice of a side and a drink.
            </Paragraph>
            <Btn  mode='custom' onPress={addToCart}>Add To Cart</Btn>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        maxWidth: 370,
        alignSelf: 'center',
        alignItems: 'center',
    },
    foodImage: {
        marginTop: 120,
        marginBottom: 20
    },
    detailsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6
    },
    itemLocation: {
        fontSize: 14,
        marginBottom: 6
    },
    itemType: {
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6
    },
    countContainer: {
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        marginTop: 30,
        fontSize: 18,
        color: 'gray',
        marginBottom: 60
    }
})

export default FoodItem