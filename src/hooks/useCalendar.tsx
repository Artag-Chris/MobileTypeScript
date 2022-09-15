import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AgendaSchedule, DateData } from 'react-native-calendars'

export const useCalendar = () => {
    const [Items, setItems] = useState<any>([])

    const timeToString=(time: number)=> {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
    
    const loadItems = (day: DateData) => {
       
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
    
            if (!Items[strTime]) {
              Items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                Items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
          }
          
          const newItems: AgendaSchedule = {};
          Object.keys(Items).forEach(key => {
            newItems[key] = Items[key];
          });
         setItems(newItems);
        }, 1000);
      }
 
      return{ Items, loadItems }
}



const styles = StyleSheet.create({})