import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calendario from '../components/Calendario'

const Sintomas = () => {
  return (
    <View style={{flex:1}}>
          <StatusBar
        barStyle="light-content"
        backgroundColor="#F400A2"
        
         />
      <View style={{height:"80%"}}>
      <Calendario />
      </View>
    </View>
  )
}

export default Sintomas

const styles = StyleSheet.create({})