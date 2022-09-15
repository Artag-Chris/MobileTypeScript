import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParam } from '../navigator/StackNavigator'
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import Publicidad from '../components/Publicidad';
import ShowDia from '../components/ShowDia';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { useUserStatus } from '../hooks/useUserStatus';



interface Props extends StackScreenProps<RootStackParam, "Home"> { };
const Home = ({ route, navigation }: Props) => {
  const { BitinContext } = useContext(BitinUserContext)
  const { getCitas, getMedicamentos,getFormulas,getSintomas }= useUserStatus();
  const [formulas, setFormulas] =useState([])
  const [refresh,setRefresh]= useState<Boolean>(false)
  
  useEffect(()=>{
  setFormulas(BitinContext.formulas)
  setRefresh(true)
  return()=>{
    setRefresh(!refresh)
    
  }
  },[BitinContext.formulas])
  

 
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{
          width: 80,
          alignItems: "center"
        }}>
          <TouchableOpacity activeOpacity={0.5} >
            <Avatar rounded size={45} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: "flex-end",
          width: 80,
          marginRight: 20
        }}>
          <TouchableOpacity activeOpacity={0.5} >
            <AntDesign name="setting" size={24} color="white" onPress={() => console.log(BitinContext.medicamentos)} />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: (props => <Image source={require('../../assets/logo.png')} style={{ width: 70, height: 30 }} />),
      headerStyle: { backgroundColor: '#F400A2', alignItems: "center" },
      headerTitleStyle: { color: 'white' },
      headerTitleAlign: 'center'
    });
  }, [navigation])


  

 useEffect(() => {
    if (BitinContext.isLogin == true) {
      console.log("entro")
    } if (BitinContext.isLogin == false && BitinContext.userName == "") {
      navigation.navigate('Login')
    }
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <Publicidad  />
      <ShowDia formulas={formulas} refresh={refresh} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})