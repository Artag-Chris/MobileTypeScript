import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Agenda} from 'react-native-calendars';
import { useCalendar } from '../hooks/useCalendar';
import { renderItem } from '../renderItems/CalendarioRender';




const Calendario = () => {
   const{ Items, loadItems } = useCalendar();

  return (
    <View style={{flex:1}}>
       <Agenda
        items={Items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
      
        />
    </View>
  )
}

export default Calendario

const styles = StyleSheet.create({})