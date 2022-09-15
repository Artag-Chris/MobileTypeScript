import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParam } from '../navigator/StackNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';



interface Props extends StackScreenProps<RootStackParam, "Emoticones"> { };
const Emoticones = ({ route, navigation }: Props) => {
    const{BitinContext}=useContext(BitinUserContext)
    const [seleccionados, setSeleccionados] = useState<any[]>([]) ///este array debe ser usado incluso en los nuevos registros
    const [refresh, setRefresh] = useState(false);
    const [selectedId, setSelectedId] = useState<any>(null);

    const day:any= route.params;

    const guardarSintoma=async()=>{
        const newSintoma: any={
        username: BitinContext.userName,
        email: BitinContext.email,
        fecha: day.day.dateString,
        sintomas: seleccionados
        }
        const docRef = doc(collection(db, "Sintomas"));
        await setDoc(docRef, newSintoma, { merge: true })
          .then(() => {
              console.log("Document successfully written!");
              navigation.navigate("RegistroSintomas")
          })
          .catch(error => {
            console.log(error);
          });    


    }

    const[emoticones, setEmoticones] = useState<any[]>([{
        id: 1,
        nombreSintoma: "emoticon-sick-outline",
        texto: "Estoy mal",
    },
    {
        id: 2,
        nombreSintoma: "emoticon-sad-outline",
        texto: "Estoy triste",
    },
    {
        id: 3,
        nombreSintoma: "emoticon-angry-outline",
        texto: "Estoy Enojado",
    }, {
        id: 4,
        nombreSintoma: "emoticon-happy-outline",
        texto: "Estoy Feliz",
    }, {
        id: 5,
        nombreSintoma: "emoticon-confused-outline",
        texto: "Estoy consfuso",
    }, {
        id: 6,
        nombreSintoma: "emoticon-cry-outline",
        texto: "Estoy llorando",
    }, {
        id: 7,
        nombreSintoma: "emoticon-tongue-outline",
        texto: "Estoy batiendo",
    }, {
        id: 8,
        nombreSintoma: "emoticon-wink-outline",
        texto: "Estoy mirando",
    }])
    const ref = useRef(null);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Registra un sintoma',
            headerStyle: { backgroundColor: '#F400A2' },
            headerTitleStyle: { color: 'white' },

        })
    }, [])

    const handleClickAgregar = (item: any) => {
        const newSelected = { ...item }
        setSeleccionados(prevData => [...prevData, newSelected])
        return [...seleccionados]
    }
    const handleClickBorrar = (item: any) => {
        //filter que no devuelve el mismo elemento
        const newEmoticons = emoticones.filter(emocion => emocion.id !== item.id)
        setEmoticones(newEmoticons)
        return [...emoticones]
      }

    

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ width: "100%", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ borderRadius: 50, width: "90%", marginTop: 8, justifyContent: "center", borderColor: "black", borderWidth: 5, backgroundColor: "gray",height:50 }}>
                    <TouchableOpacity style={{ flexDirection: "row", height: "100%" }}  onPress={() => {
                setSelectedId(item.id);
                handleClickAgregar(item)
                handleClickBorrar(item);
                setRefresh(!refresh)

            }}>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 2, height: "100%" }}>
                            <MaterialCommunityIcons name={item.nombreSintoma} size={26} color="black" style={{}} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 6, height: "100%"}}>
                            <Text style={{  alignSelf: "center", fontSize:20 }} >{item.texto}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
    return (
        <View style={{ flex: 1, height: "100%" }}>
            <View style={{ height: "83%", flexDirection: "column" }}>
                <View style={{ flex: 1, backgroundColor: "#F400A2", alignItems: "center", justifyContent: "center", borderColor: "black", borderWidth: 4 }}>
                    <Text style={{ color: "white",fontSize:30 }}>¿Como te sientes hoy?</Text>
                </View>
                <View style={{ flex: 6,justifyContent:"space-around" }}>
                    <FlatList data={emoticones}
                        renderItem={renderItem}
                        keyExtractor={(item: any, id) => id.toString()}
                        ref={ref}
                        extraData={!refresh}
                    />
                     {seleccionados.length>0&&<View style={styles.clickContainer}><TouchableOpacity style={styles.click} onPress={()=>guardarSintoma()}><Text>Click para guardar</Text></TouchableOpacity></View>}
                </View>
            </View>
       
        </View>
    )
}

export default Emoticones

const styles = StyleSheet.create({
    clickContainer:{
   justifyContent:"center",alignItems:"center"
    },
    click:{
        backgroundColor:"#F400A2",
        borderRadius:50,
        width:"90%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borberColor:"black",
        borderWidth:5
        
    }
})