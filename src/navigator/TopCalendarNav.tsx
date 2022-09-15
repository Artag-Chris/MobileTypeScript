import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Formulas from '../screens/Formulas';
import Medicamentos from '../screens/Medicamentos';

export type RootTopStackParam = {
  Formulas: undefined;
  Medicamentos: undefined;
}
const Tab = createMaterialTopTabNavigator<RootTopStackParam>();

export const TopCalendarNav=()=> {
  return (
    <Tab.Navigator   screenOptions={{
   
      tabBarLabelStyle: {  fontWeight: 'bold',color: 'white',fontSize: 15 },
      tabBarItemStyle: {height:80},
      tabBarStyle: { backgroundColor: '#F400A2' },
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: 'black',
      
     
    }} >
      <Tab.Screen name="Formulas" options={{tabBarLabel:"Formulas",tabBarActiveTintColor:"#fff",tabBarInactiveTintColor:"black"}}  component={Formulas} />
      <Tab.Screen name="Medicamentos" options={{}}  component={Medicamentos} />
    </Tab.Navigator>
  );
}