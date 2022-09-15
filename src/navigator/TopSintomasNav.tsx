import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Sintomas from '../screens/Sintomas';
import RegistroSintomas from '../screens/RegistroSintomas';
import { BackgroundImage } from 'react-native-elements/dist/config';

const Tab = createMaterialTopTabNavigator();

export const TopSintomasrNav=()=> {
  return (
    <Tab.Navigator   screenOptions={{
   
      tabBarLabelStyle: {  fontWeight: 'bold',color: 'white',fontSize: 17 },
      tabBarItemStyle: {height:80},
      tabBarStyle: { backgroundColor: '#F400A2' },
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: 'black',
      
     
    }}>
      <Tab.Screen name="Sintomas"  
   component={Sintomas} />
      <Tab.Screen name="Registrar Nuevo"  options={{
        tabBarLabel: 'Registrar Sintoma',   
        
        }} component={RegistroSintomas} />
    </Tab.Navigator>
  );
}