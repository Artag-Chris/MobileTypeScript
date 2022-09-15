
import React, { useContext, useRef, useState,useEffect  } from 'react'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext'
import { useSignOut } from '../hooks/useSignOut';
import { Button, FlatList, ListRenderItem, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Checkbox } from 'react-native-paper';
import { Medicamento } from '../interfaces/interfaces';
import { useFormulario } from '../hooks/useFormulario';
import Medicamentos from './Medicamentos';
import { UseOrganizarDatos } from '../hooks/UseOrganizarDatos';





const VistaX = () => {

  const { BitinContext, getMedicamento, getCita, getFormula } = useContext(BitinUserContext);
  const{medicamentosArg}=UseOrganizarDatos() 
  console.log(medicamentosArg)
  return(
    <View style={{flex:1 ,backgroundColor:"red"}}>
     <Text>hi</Text>
    
      
    </View>
  )
  }

  export default VistaX

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });