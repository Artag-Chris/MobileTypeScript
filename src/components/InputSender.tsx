import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'


const InputSender = (props: any) => {
   
   
  
    return (
        <View style={styles.sender}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }}
                    style={styles.avatarSender} />
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{ color: "white" }}>{props.username} Escribe tu respuesta </Text>
                </View>
            </View>
            <View style={styles.topSeparator}>
                <TextInput
                    style={{}}
                    label={props.label}
                    placeholder={props.placeholder}
                    value={props?.respuesta }
                    onChangeText={text=>props?.setRespuesta(text)}
                    onSubmitEditing={()=>props?.setNombreFormula(props?.respuesta)}
                    keyboardType={props.keyboardType}
                    autoFocus
                />
            </View>

        </View>
    )
}

export default InputSender

const styles = StyleSheet.create({

    sender: {
        //padding: 15,
        backgroundColor: "#F400A2",
        //backgroundColor: "blue",
        alignSelf: "flex-start",
        borderRadius: 5,
        margin: 15,
       
        position: "relative",
        color: "white",
         width: "70%",

    }, topSeparator: {
       borderTopColor: "black",
       borderTopWidth: 1,
      
    },
    avatarSender: {
        width: 40,
        height: 40,
        borderRadius: 75,
    },
})