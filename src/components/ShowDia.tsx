import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import React, { useRef,useEffect, useState } from 'react'
//import { data as Fake } from '../DummyData/Dummy';
import { Item } from '../renderItems/Item';
import { Formula } from '../interfaces/interfaces';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';





const ShowDia = ({formulas}:any,{refresh}:any) => {
    const { BitinContext } = useContext(BitinUserContext)
    const [data,setData]=useState<any>()
    const [refrescar,setRefrescar]=useState<boolean>(refresh? refresh:false)

  

    useEffect(() => {
        
        return ()=>{
            setRefrescar(!refrescar)
            setData(formulas)
        }
      }, [refrescar]) 
    
    const ref = useRef(null);


    const renderItem: ListRenderItem<Formula> = ({ item }) => <Item data={item} />;

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerSecundario}>
                <View style={{ alignContent: "center", alignItems: "center", height: "78%", width: "100%", }}>
                    <View style={{ width: "90%", flexDirection: "row",borderColor:"black",borderWidth:3 }}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:17,color:"black",alignSelf:"center"}} >Formulas</Text>
                        </View>
                        <View style={{ flex:1}}>
                            <Text style={{ fontSize:17,color:"black",alignSelf:"center"}} >Ultimo Dia</Text>
                        </View>
                    </View>
                    {formulas &&  <View style={{ flex: 1, width: "100%" }} >
                        <FlatList data={formulas}
                            renderItem={(item) => renderItem(item)}
                            keyExtractor={(item) => item.nombreFormula}
                            extraData={!refrescar}
                            ref={ref}
                        />
                    </View>}
                    
                 

                </View>
            </View>
        </View>
    )
}

export default ShowDia

const styles = StyleSheet.create({
    containerPrincipal: { flex: 1, alignItems: "center"},
    containerSecundario: { flex: 1, alignItems: "center", width: "100%",marginTop:10 },
})