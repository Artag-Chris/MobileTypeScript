import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import React from 'react';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Formulas from '../screens/Formulas';
import { BottonTabNav } from './BottonTabNav';
import Emoticones from '../screens/Emoticones';
import RegistroSintomas from '../screens/RegistroSintomas';



//aqui se definen los props que tendran cada uno de los screens
//se ira actualizando mientras valla agregando mas codigo
export type RootStackParam = {
  Login: undefined;
  Home: undefined;
  Registro: undefined;
  Notifications: undefined;
  Formulas: undefined;
  Emoticones:undefined;
  RegistroSintomas:undefined;
}

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"  >
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Formulas" component={Formulas} />
      <Stack.Screen name="Emoticones" component={Emoticones} />
      <Stack.Screen name="RegistroSintomas" component={RegistroSintomas} />
    </Stack.Navigator>
  );
}