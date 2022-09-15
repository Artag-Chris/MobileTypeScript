import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { BitinUserContext } from '../../context/bitinContext/BitinUserContext';
import { Formula } from '../../interfaces/interfaces';

const TopCalendarformulas = () => {
    const { BitinContext } = useContext(BitinUserContext)
    const formulas = BitinContext.formulas? BitinContext.formulas : []

    const renderItem: ListRenderItem<Formula> = ({ item }) => (<View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{  flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{color:"white"}}>{item.nombreFormula}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{color:"white"}}>{item.fechaVenceFormula}</Text>
        </View>
    </View>)



    return (
        <View style={styles.containerUpper} >
            <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "800",color:"#F400A2" }}>Formulas pendientes</Text>
                </View>
                <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "800",color:"#F400A2" }}>Vence</Text>
                </View>
            </View>
            <View style={{ width: "90%", justifyContent: "center" }}>
             {formulas?   <FlatList
                    data={formulas}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.nombreFormula}
                />: "vacio"}
            </View>
        </View>
    )
}

export default TopCalendarformulas

const styles = StyleSheet.create({
    containerUpper: { flex: 6, alignItems: "center", flexDirection: "column",
     borderBottomWidth: 3, borderBottomColor: "black",
    backgroundColor: 'gray' },
})