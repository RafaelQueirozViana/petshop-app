import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
  <View style={styles.header}>
    <Text style={styles.logo}>PetFlasah</Text>
  
  <Pressable onPress={() => console.log("clicked")}>
    <Text style={styles.menu}>Menu</Text>
  </Pressable>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
     header: {
    height: 55,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },

  menu: {
    fontSize: 14,
    color: '#222222',
  },
});
