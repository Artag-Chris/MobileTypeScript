import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'

const Publicidad = (props:any) => {
    return (
        <TouchableOpacity >
        <View style={styles.contenedorPrincipal}>
            <View style={styles.contenedorSecundario}>
                <View style={styles.contenedorTerciario}>
                    <Text style={{fontSize:50,color:"white"}}>Publicidad</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Publicidad

const styles = StyleSheet.create({
    contenedorPrincipal: {
        backgroundColor: "#F400A2",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    }, contenedorSecundario: {
        backgroundColor: "#F400A2",
        width: "90%",
        height: 80,
        borderColor: "black",
        borderWidth: 5,
        borderRadius:10
    },contenedorTerciario: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})