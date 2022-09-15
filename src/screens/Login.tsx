import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useEffect, useLayoutEffect, useState} from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLogin } from '../hooks/useLogin';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { menuLateraltStackParam } from '../navigator/Menulaterar';


//esta interface se usa para definir los props que se pasaran a la siguiente pantalla y ayuda a desestructurar los props
interface Props extends StackScreenProps<menuLateraltStackParam, "Login"> { };


const Login = ({ route, navigation }: Props) => {

  const [secure, setSecure] = useState(true);
  const {
    email,setEmail,password,setPassword,signInEmail,auth
  }=useLogin();

 
 const{BitinContext}=useContext(BitinUserContext)

 useEffect(() => {
  if (BitinContext.isLogin==true) {
    navigation.navigate('BottonTabNav')
  }
 }, [BitinContext.isLogin])




  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Bienvenido',
      headerStyle: { backgroundColor: '#F400A2' },
      headerTitleStyle: { color: 'white' },
      
    })   
  }, [])

 {/*useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);*/}


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar backgroundColor='#F400A2' />

      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 200, height: 200, }}
      />
      <View style={styles.inputContainer} >
        <TextInput mode="outlined" label="Email" placeholder="Email" style={styles.inputText} value={email} onChangeText={text => setEmail(text)} />
        <TextInput mode="outlined" label="Contraseña" placeholder="Password" secureTextEntry={secure} value={password} onChangeText={text => setPassword(text)} right={<TextInput.Icon onPress={()=>setSecure(!secure)} name="eye" color="#F400A2" />} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => signInEmail()}>
        <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }} >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Registro")}>
        <Text style={{ color: "black", fontSize: 20, alignSelf: "center" }} >
          Registrarte
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Icon.Button name="google" style={styles.google} backgroundColor="#F400A2" borderRadius={20} onPress={() => console.log("click")}>
          <Text style={{ color: "white", fontSize: 20 }} >
            Login with Google
          </Text>
        </Icon.Button>
      </TouchableOpacity>

      <View style={{ }} />
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  inputContainer: {
    width: 200,
    marginBottom: 30,
  },
  button: {
    width: 200,
    height: 50,
    alignSelf: "center",
    justifyContent: 'center',
    //backgroundColor: 'rgb(223,87,208)',
    backgroundColor: '#F400A2',
    color: 'white',

    borderRadius: 20,

  }, button2: {
    width: 200,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    //backgroundColor: 'rgb(223,87,208)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  }, google: {
    width: 200,
    height: 50,
    alignSelf: "center",
    //backgroundColor: 'rgb(223,87,208)',
    backgroundColor: '#F400A2',
    color: 'white',
  }, inputText: {
    width: 200,


  }
})