import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParam } from '../navigator/StackNavigator'
import WeekCalendar from '../components/WeekCalendar'


interface Props extends StackScreenProps<RootStackParam, "Formulas"> { };
const Formulas = ({ route, navigation }: Props) => {

  

  return (
    <View style={{flex:1,}}>
      <View style={{height:"80%"}}>
     <WeekCalendar />
      </View>
    </View>
  )
}

export default Formulas

const styles = StyleSheet.create({})