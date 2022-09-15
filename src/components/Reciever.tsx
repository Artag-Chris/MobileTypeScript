import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reciever = (props :any) => {
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
    <View style={styles.reciever}>
      <Text  > {props.texto} </Text>
    </View>
    <Image
      source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }}
      style={styles.avatarReciever} />
  </View>
  )
}

export default Reciever

const styles = StyleSheet.create({
    reciever: {
      //padding: 15,
      backgroundColor: "#ECECEC",
      justifyContent: "center",
      //backgroundColor: "red",
      alignSelf: "flex-end",
      borderRadius: 50,
      marginRight: 5,
      marginBottom: 5,
      //maxWidth: "80%",
      position: "relative",
    },
   avatarReciever: {
      width: 40,
      height: 40,
      borderRadius: 75,
      alignSelf: "flex-end",
      marginTop: -5,
    }
  })