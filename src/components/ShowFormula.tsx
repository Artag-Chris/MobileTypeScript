import { ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'

const ShowFormula = (props: any) => {
    


    const renderItem: ListRenderItem<any> = ({ item }: { item: any }) =>
        <View style={{ flex: 1, backgroundColor: "yellow", marginTop: 10, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }} >
            <Text>{item.nombreMedicamento} </Text>
            <Text>{item.dosis} </Text>
            <Text>{item.intensidad} </Text>
        </View>;



    return (
        <Card>
            <Card.Content>
                <Title>Formula </Title>
                <Paragraph>Formula: {props.nombreFormula}  </Paragraph>
                <Paragraph>Dia entregada: {props.fechaInicioFormula}  </Paragraph>
                <Paragraph>Dia que caduca: {props.fechaVenceFormula} </Paragraph>
                <Paragraph>medicamentos: </Paragraph>
                <View>
                    <FlatList
                        data={props.seleccionados}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item) => item.nombreMedicamento}
                    />
                </View>
            </Card.Content>
            <Card.Actions> 
                <Button >Cancelar</Button>
                <Button onPress={()=>{ props.writeNewFormula(props.seleccionados)
                props.setIsFormula(null)
                }}>Guardar</Button>
            </Card.Actions>
        </Card>
    )
}

export default ShowFormula

const styles = StyleSheet.create({})