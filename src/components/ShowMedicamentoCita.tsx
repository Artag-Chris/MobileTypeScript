import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Agenda } from 'react-native-calendars'
import { useCalendar } from '../hooks/useCalendar';
import { renderMedicamentoCita } from '../renderItems/RenderMedicamentoCita';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { UseOrganizarDatos } from '../hooks/UseOrganizarDatos';

const ShowMedicamentoCita = () => {
  const{medicamentosArg}=UseOrganizarDatos()

  

  const { Items,loadItems } = useCalendar();
  return (
    <View style={{flex:1}}>
       <Agenda
        items={medicamentosArg}
        loadItemsForMonth={loadItems}       
        renderItem={renderMedicamentoCita}
        renderEmptyData={() => {
          return <View />;
        }}
        />
    </View>
  )
}

export default ShowMedicamentoCita

const styles = StyleSheet.create({})