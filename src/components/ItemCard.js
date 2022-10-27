import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const ItemCard = ({navigation}) => {
  return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Food')}>
            <Image source={require('../assets/paneer.png')} style={styles.itemImage}/>
            <View style={styles.content}>
                <Text style={styles.itemName}>Paneer Pizza</Text>
                <Text style={styles.address1}>2972 Westheimer Rd.</Text>
                <Text style={styles.address2}>Santa Ana, Illinois 85486</Text>
            </View>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemImage: {
        borderRadius: 12,
        height: 96,
        width: 96,
        overflow: 'hidden',
        marginRight: 16, 
    },
    content: {
        
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    address1: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 4
    },
    address2: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 4
    }
})
export default ItemCard