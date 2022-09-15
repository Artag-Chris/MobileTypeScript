import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';

const Configuraciones = () => {
  const {BitinContext }=useContext(BitinUserContext);

  
  return (
    <ScrollView>
      <Text>{JSON.stringify(BitinContext,null,4)} </Text>
    </ScrollView>
  )
}

export default Configuraciones

const styles = StyleSheet.create({})