import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('../assets/pp.png')} style={styles.profileImage}/>
        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.phone}>+1249000000</Text>
          <Text style={styles.edit}>Edit</Text>
        </View>
      </View>
      <View style={{marginVertical: 10}}/>
      <Text style={styles.section}>Account</Text>
      <View style={styles.options}>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="location-outline" size={20} />
          <Text style={{fontSize: 18}}>Location</Text>
        </View>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="wallet-outline" size={20} />
          <Text style={{fontSize: 18}}>My Payment Methods</Text>
        </View>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="refresh-outline" size={20} />
          <Text style={{fontSize: 18}}>Change Password</Text>
        </View>
      </View>
      <View style={{marginVertical: 10}}/>
      <Text style={styles.section}>Notification</Text>
      <View style={styles.options}>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="notifications-outline" size={20} />
          <Text style={{fontSize: 18}}>App Notifications</Text>
        </View>
      </View>
      <View style={{marginVertical: 10}}/>
      <Text style={styles.section}>Other</Text>
      <View style={styles.options}>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="globe-outline" size={20} />
          <Text style={{fontSize: 18}}>Language</Text>
        </View>
        <View style={styles.option}>
          <Ionicons style={styles.icon} name="close-circle-outline" size={20} />
          <Text style={{fontSize: 18}}>Remove Account</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    marginRight: 40
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 4
  },
  phone: {
    color: 'grey'
  },
  edit: {
    marginTop: 4,
    color: 'orange'
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 40,
    fontWeight: 'bold',
    color: 'grey'
  },
  options: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  option: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  }
})

export default Profile