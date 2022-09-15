import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Publicidad from '../components/Publicidad'
import Calendario from '../components/Calendario'
import ShowMedicamentoCita from '../components/ShowMedicamentoCita'

const Medicamentos = () => {
  return (
    <View style={{flex:1}}>
     <ShowMedicamentoCita />
    </View>
  )
}

export default Medicamentos

const styles = StyleSheet.create({})