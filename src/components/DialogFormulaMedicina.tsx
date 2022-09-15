import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useFormulario } from '../hooks/useFormulario';
import ShowFormula from './ShowFormula';

const DialogFormulaMedicina = (props: any) => {
    const { continuar, seleccionados } = useFormulario()

    return (
        <View>
            <View>
                <Card>
                    <Card.Content>
                        <Text>{props.title} </Text>
                        <Text> Nombre del Medicamento: {props.nombreMedicamento}  </Text>
                        <Text> Dosis: {props.dosis}  Cada: {props.intensidad} horas </Text>
                        <Text> Fecha de Inicio de tratamiento: {props.fechaInicioMedicamento}  </Text>
                        <Text> Fecha final del tratamiento: {props.fechaVenceMedicamento}  </Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button ><Text>Cancelar</Text></Button>
                        <Button onPress={props.writeNewMedicamento}><Text>Guardar</Text></Button>
                    </Card.Actions>
                </Card>
            </View>
            <Text>hello</Text>
            { /*continuar && <ShowFormula nombreFormula={props.nombreFormula} fechaInicioFormula={props.fechaInicioFormula}
                fechaVenceFormula={props.fechaVenceFormula} seleccionados={props.seleccionados ? props.seleccionados : seleccionados} writeNewFormula={props.writeNewFormula} /> */}///hay que pasar todo por props

        </View>

    )

}

export default DialogFormulaMedicina

const styles = StyleSheet.create({})