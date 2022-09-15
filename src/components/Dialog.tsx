import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const Dialog = (props: any) => {

    return (
        
            <Card>
                <Card.Content>
                    <Title>{props.title} </Title>
                    <Paragraph> Nombre del Medicamento: {props.nombreMedicamento}  </Paragraph>
                    <Paragraph> Dosis: {props.dosis}  Cada: {props.intensidad} horas </Paragraph>
                    <Paragraph> Fecha de Inicio de tratamiento: {props.fechaInicioMedicamento}  </Paragraph>
                    <Paragraph> Fecha final del tratamiento: {props.fechaVenceMedicamento}  </Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button >Cancelar</Button>
                    <Button onPress={()=>{props.writeNewMedicamento, props.setIsMedicamento(null) }  }>Guardar</Button>
                </Card.Actions>
            </Card>

    )

}

export default Dialog

const styles = StyleSheet.create({})