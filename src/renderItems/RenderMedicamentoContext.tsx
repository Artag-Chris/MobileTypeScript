import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Medicamento } from '../interfaces/interfaces'
import { Card } from 'react-native-paper'

export const RenderMedicamentoContext = (item: Medicamento) => {
    return (
        <View>
            <TouchableOpacity style={{ marginRight: 20, marginTop: 30 }}>
                <View style={{}}>
                    <Card style={{}}>
                        <Card.Content style={{}}>
                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>{item.nombreMedicamento} </Text>
                                <View style={{ alignItems: "center" }}>
                                    <Text>{item.dosis} </Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({})