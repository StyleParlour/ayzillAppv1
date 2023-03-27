import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


export default function Home() {
  return (
    <View style={styles.container}> 
      <Text>Home</Text>


      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#171963',
        alignItems: 'center',
        justifyContent: 'center',
    },

})