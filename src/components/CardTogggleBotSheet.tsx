import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardTogggleBotSheet = (props:any) => {
  return (
    <View style={styles.sender}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }}
          style={styles.avatarSender} />
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }} >{props.username} </Text>
        </View>
      </View>
      <View style={styles.topSeparator}>
        <Text >
          {props.texto}
        </Text>
      </View>
  </View>
  )
}

export default CardTogggleBotSheet

const styles = StyleSheet.create({
 
    sender: {
      //padding: 15,
      backgroundColor: "#F400A2",
      //backgroundColor: "blue",
      alignSelf: "flex-start",
      borderRadius: 5,
      margin: 15,
      maxWidth: "80%",
      position: "relative",
      color: "white",
  
    },topSeparator: {
      borderTopColor: "purple",
      borderTopWidth: 1,
      marginTop: 1,
      width: 180,
      justifyContent: "center",
      alignItems: "center"
    },
    avatarSender: {
      width: 40,
      height: 40,
      borderRadius: 75,
    },
  })