import "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Menulaterar } from "./src/navigator/Menulaterar";
import { BitinUserProvider } from "./src/context/bitinContext/BitinUserContext";

export default function App() {
  return (
    
      <NavigationContainer>
        <AppProvider>
        <Menulaterar />
       <StatusBar style="auto" />
        </AppProvider>
      </NavigationContainer>
   
  );
}

const AppProvider = ({children}:any) => {
return(
  <BitinUserProvider>
    {children}
  </BitinUserProvider>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
