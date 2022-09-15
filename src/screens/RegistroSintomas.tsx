import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Calendar } from 'react-native-calendars'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParam } from '../navigator/StackNavigator'

interface Props extends StackScreenProps<RootStackParam, "RegistroSintomas"> { };
const RegistroSintomas = ({ route, navigation }: Props) => {


  return (
    <View style={{ flex: 1 }}>
  
      <View style={{ height: "82%", width: "100%" }} >
        <View style={{  backgroundColor: "#F400A2", width: "100%",flex:1,justifyContent:`center`,alignItems:`center`,borderColor:`black`,borderWidth:5 }} >
          <Text style={{fontSize:25,color:`white`}}>Pulsa en una fecha  </Text>
          <Text style={{fontSize:20,color:`white`}} > asi Agendaras un nuevo Sintoma</Text>
        </View>
        <View style={{  width: "100%",flex:5 }} >
        <Calendar onDayPress={day => {
          console.log('selected day', day),
            navigation.navigate<any>("Emoticones", { day })
        }} />
        </View>
      </View>
    </View>
  )
}

export default RegistroSintomas

const styles = StyleSheet.create({})