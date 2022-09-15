import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { RootStackParam } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useRegistrar } from '../hooks/useRegistrar';
import { menuLateraltStackParam } from '../navigator/Menulaterar';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';

interface Props extends StackScreenProps<menuLateraltStackParam, "Registro"> { };

const Registro = ({ route, navigation }: Props) => {
    const [secure, setSecure] = useState(true);
    const{BitinContext}=useContext(BitinUserContext);

    const {
        name, setName, email, setEmail, password, setPassword, imageUrl, setImageUrl, register
    } = useRegistrar();

    useEffect(() => {
        if (BitinContext.refresh==true) {
          navigation.navigate('Login')
        }
       }, [BitinContext.refresh])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login',
            headerStyle: { backgroundColor: '#F400A2', },
            headerTitle: 'Registrate',
            headerTitleStyle: { color: 'white' }
        });
    }, [navigation]);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style='light' />
            <View style={{ height: 50, justifyContent: "center" }} >
                <Text style={{ color: "gray", fontSize: 30 }}>
                    Crea una cuenta
                </Text>
            </View>
            <View style={styles.inputcontainer}>
                <TextInput mode="outlined" label="Nombre" placeholder="Nombre" value={name} onChangeText={text => setName(text)} />
                <TextInput mode="outlined" label="Email" placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                <TextInput mode="outlined" label="contraseña" placeholder="Password" secureTextEntry={secure} value={password} onChangeText={text => setPassword(text)} right={<TextInput.Icon onPress={()=>setSecure(!secure)} name="eye" color="#F400A2" />} />
                <TextInput mode="outlined" label="Avatar" placeholder="Imagen (Opcional)" value={imageUrl} onChangeText={text => setImageUrl(text)} onSubmitEditing={() => console.log("register")} />
            </View>
            <Button style={styles.button} onPress={() => register()}>
                <Text style={{ color: "white", fontSize: 15 }} >
                    Registrarse
                </Text>
            </Button>
            <View style={{ }} />
        </KeyboardAvoidingView>
    )
}

export default Registro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#F400A2',
        borderRadius: 20,
        color: 'white',
    
    },
    inputcontainer: {
        width: 300,
        marginBottom: 50,
    }
})