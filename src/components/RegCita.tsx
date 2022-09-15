import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Reciever from './Reciever'
import InputSender from './InputSender'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext'
import { useInput } from '../hooks/useInput'
import { useCitas } from '../hooks/useCitas';
import useOpenPicks from '../hooks/useOpenPicks'
import CardTogggleBotSheet from './CardTogggleBotSheet'
import DateTimePicker from './DateTimePicker'
import TimeDatePicker from './TimeDatePicker'
import DialogCita from './DialogCita';

const RegCita = ({setIsCita}:any) => {

  const { BitinContext } = useContext(BitinUserContext);
  const { respuesta, setRespuesta, respuesta2, setRespuesta2 } = useInput();
  const { open, setOpen, open2, setOpen2, } = useOpenPicks()
  const { nombreCita, setNombreCita,
     fechaCita, setFormatedDate,
     lugarCita, setLugarCita,
     horaCita, setHoraCita, setFormatedHour,
     writeNewCita } = useCitas();

  return (
    <View>
      <Reciever texto="Registremos una nueva cita" />
      <Reciever texto="¿Con quien agendaras esta cita?" />
      <InputSender username={BitinContext.userName}
        label="nombra la persona o especialista"
        respuesta={respuesta}
        setRespuesta={setRespuesta}
        setNombreFormula={setNombreCita}
        placeholder={"ejm: Dr Smith o cita internista "}
      />
      {nombreCita && <Reciever texto="¿Donde se llevara a cabo?" />}
      {nombreCita&&<InputSender username={BitinContext.userName}
        label="Lugar o sitio "
        respuesta={respuesta2}
        setRespuesta={setRespuesta2}
        setNombreFormula={setLugarCita}
        placeholder={"ejm: edificio, clinica, hospital"}
      />}

      {lugarCita && <Reciever texto="¿Cual es la fecha para esta cita?" />}
      {lugarCita && <TouchableOpacity onPress={() => setOpen(true)}>
        <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="Fecha de la cita" />
      </TouchableOpacity>}
      <DateTimePicker open={open} mode={"date"} setFormatedDate={setFormatedDate} setOpen={setOpen} />
      {fechaCita && <Reciever texto="¿A que hora sera la cita?" />}
      {fechaCita && <TouchableOpacity onPress={() => setOpen2(true)}>
        <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="horade la cita" />
      </TouchableOpacity>}
      <TimeDatePicker open={open2} setOpen={setOpen2} mode="time" setTime={setFormatedHour} />
      {horaCita && <Reciever texto="¿Registrar la nueva cita?" />}
      {horaCita && <DialogCita title={"Nueva Cita"} nombreCitas={nombreCita} lugar={lugarCita} 
      fechaCita={fechaCita} horaCita={horaCita} writeNewCita={writeNewCita} setIsCita={setIsCita} 
      />}

    </View>
  )
}

export default RegCita

const styles = StyleSheet.create({})