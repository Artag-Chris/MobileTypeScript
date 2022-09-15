import { StyleSheet} from 'react-native'
import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const DialogCita = (props:any) => {
  return (
    <Card>
        
    <Card.Content>
        <Title>{props.title} </Title>
        <Paragraph>Cita: {props.nombreCita}  </Paragraph>
        <Paragraph>Lugar: {props.lugar}  </Paragraph>
        <Paragraph>Fecha: {props.fechaCita} </Paragraph>
        <Paragraph>Hora: {props.horaCita}  </Paragraph>
    </Card.Content>
    <Card.Actions>
        <Button >Cancelar</Button>
        <Button onPress={()=>{props.writeNewCita(), props.setIsCita(null)} }>Guardar</Button>
    </Card.Actions>
</Card>
  )
}

export default DialogCita

const styles = StyleSheet.create({})