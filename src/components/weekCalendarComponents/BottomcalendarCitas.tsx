import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { BitinUserContext } from '../../context/bitinContext/BitinUserContext';
import { Cita, Formula } from '../../interfaces/interfaces';

const BottomCalendarCitas = () => {
    const { BitinContext } = useContext(BitinUserContext)
    const citas = BitinContext.citas? BitinContext.citas : []

    const renderItem: ListRenderItem<Cita> = ({ item }) => (<View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{  flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{color:"black"}}>{item.nombreCita}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{color:"black"}}>{item.fechaCita}</Text>
        </View>
    </View>)



    return (
        <View style={styles.containerUpper} >
            <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "800",color:"#F400A2" }}>Proximas Citas</Text>
                </View>
                <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "800",color:"#F400A2" }}>fecha y Hora </Text>
                </View>
            </View>
            <View style={{ width: "90%", justifyContent: "center" }}>
                {citas ? <FlatList
                    data={citas}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.nombreFormula}
                /> : "vacio"}
            </View>
        </View>
    )
}

export default BottomCalendarCitas

const styles = StyleSheet.create({
    containerUpper: { flex: 6, alignItems: "center", flexDirection: "column",
    
    },
})