import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Btn from '../components/Button'
const Cart = ({navigation}) => {

  const goToCheckout = () => {
    navigation.navigate('Checkout')
  }

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack}/>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>3 Items</Text>
      </View>
      <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Food')}>
          <Image source={require('../assets/paneer.png')} style={styles.itemImage}/>
          <View style={styles.detailsContainer}>
              <View>
                    <Text style={styles.itemName}>XYZ Burger</Text>
                    <Text style={styles.itemLocation}>XYZ Location</Text>
                    <Text style={styles.itemType}>Medium</Text>
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
        </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Food')}>
          <Image source={require('../assets/paneer.png')} style={styles.itemImage}/>
          <View style={styles.detailsContainer}>
              <View>
                    <Text style={styles.itemName}>XYZ Burger</Text>
                    <Text style={styles.itemLocation}>XYZ Location</Text>
                    <Text style={styles.itemType}>Medium</Text>
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
        </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Food')}>
          <Image source={require('../assets/paneer.png')} style={styles.itemImage}/>
          <View style={styles.detailsContainer}>
              <View>
                    <Text style={styles.itemName}>XYZ Burger</Text>
                    <Text style={styles.itemLocation}>XYZ Location</Text>
                    <Text style={styles.itemType}>Medium</Text>
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
        </TouchableOpacity>

        <View style={styles.pricingContainer}>
          <View>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.tax}>Shipping and Taxes Not Included</Text>
          </View>
          <View>
            <Text style={styles.totalPrice}>$140.0</Text>
          </View>
        </View>
        <Btn  mode='custom' onPress={goToCheckout}>Go To Checkout</Btn>
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
  headerContainer: {
    width: '100%',
    marginTop: 80,
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  header: {
      fontSize: 21,
      color: theme.colors.primary,
      fontWeight: 'bold',
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth
    },
    itemImage: {
        borderRadius: 12,
        height: 96,
        width: 96,
        overflow: 'hidden',
        marginRight: 16, 
    },
    detailsContainer: {
      width: '65%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 20,
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
      fontSize: 12
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
  pricingContainer: {
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10
  },
  subtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tax: {
    color: 'gray'
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default Cart