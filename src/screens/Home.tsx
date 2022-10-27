import React from 'react'
import { Text, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import Paragraph from '../components/Paragraph'


const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'black' }}>
        <View style={styles.hero}>
          <Header style={styles.header}>You hungry?</Header>
          <Paragraph style={styles.subtitle}>We'll give you the best food!</Paragraph>
          <ImageBackground source={require('../assets/header.png')} resizeMode="contain" style={styles.image} />
        </View>
      </SafeAreaView>
      <Text style={styles.type}>Top Foods</Text>
      <View style={styles.foodList}>
        <ItemCard navigation={navigation}/>
        <ItemCard navigation={navigation}/>
        <ItemCard navigation={navigation}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: 260,
    width: '100%',
    backgroundColor: 'black',
  },
  header: {
    textAlign: 'center',
    fontSize: 34,
    color: '#fff',
    marginTop: 30,
    marginBottom: 24
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff'
  },
  image: {
    borderRadius: 50,
    width: '100%',
    height: 260
  },
  type: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 80,
    marginLeft: 20
  },
  foodList: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  }
})

export default Home