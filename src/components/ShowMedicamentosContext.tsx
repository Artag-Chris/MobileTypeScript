import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { Card } from 'react-native-paper';
import { useFormulario } from '../hooks/useFormulario';
import Reciever from './Reciever';
import CardTogggleBotSheet from './CardTogggleBotSheet';
import DialogOptions from './DialogOptions';
import ShowFormula from './ShowFormula';
import RegFormulaMedicina from './RegFormulaMedicina';


const ShowMedicamentosContext = (props: any) => {
    const { selectedId, setSelectedId, checkedID,
        setCheckedID, farmacos, setFarmacos, seleccionados,
        refresh, setRefresh, handleClickBorrar, handleClickAgregar }
        = useFormulario();
    const { BitinContext, getMedicamento } = useContext(BitinUserContext)
    const [open, setOpen] = useState(false);
    const [opcion, setOpcion] = useState<any>(null);
    const [seleccionado, setSeleccionado] = useState<any>(null);


    const renderItem: ListRenderItem<any> = ({ item }: { item: any }) =>
        <View style={{ flex: 1, marginTop: 10, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }} >
            <TouchableOpacity style={{ width: "100%" }} onPress={() => {
                setSelectedId(item.nombreMedicamento);
                setCheckedID(checkedID == false ? !checkedID : checkedID);
                handleClickAgregar(item)
                handleClickBorrar(item);
                setRefresh(!refresh)

            }} >
                <Card style={{}}>
                    <Card.Content style={{}} >
                        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "orange" }}>
                            <Text>{item.nombreMedicamento} </Text>
                            <Text>{item.dosis} </Text>

                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text>{item.intensidad} </Text>

                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>;

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: "center" }} >
                {BitinContext.medicamentos ? <FlatList
                    data={farmacos}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.nombreMedicamento}
                    extraData={!refresh}
                    horizontal={true}
                /> : null}

            </View>
            {seleccionados.length > 0 && <Reciever texto="¿Deseas Agendar la formula ya?" />}
            {seleccionados.length > 0 && <TouchableOpacity onPress={() => setOpen(true)}>
                <CardTogggleBotSheet username={BitinContext.userName} texto="presiona para seleccionar" />
            </TouchableOpacity>}
            <DialogOptions open={open} setOpen={setOpen} setOpcion={setOpcion} opcion={opcion} setSeleccionpath={setSeleccionado} />
            {seleccionado && opcion === 1 && <Reciever texto="Quedaria asi la formula" />}
            {seleccionado && opcion === 1 && <ShowFormula nombreFormula={props.nombreFormula} fechaInicioFormula={props.fechaInicioFormula}
                fechaVenceFormula={props.fechaVenceFormula} seleccionados={seleccionados} writeNewFormula={props.writeNewFormula}
                setIsFormula={props.setIsFormula}
            />}
   
        </View>
    )
}

export default ShowMedicamentosContext

const styles = StyleSheet.create({})