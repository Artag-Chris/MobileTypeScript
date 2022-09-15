import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Reciever from './Reciever'
import InputSender from './InputSender'
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { useInput } from '../hooks/useInput';
import CardTogggleBotSheet from './CardTogggleBotSheet';
import { useFormulario } from '../hooks/useFormulario';
import DateTimePicker from './DateTimePicker';
import DialogOptions from './DialogOptions';
import ShowMedicamentosContext from './ShowMedicamentosContext';
import RegFormulaMedicina from './RegFormulaMedicina';



const RegFormula = ( {setIsFormula}:any) => {
  const { BitinContext } = useContext(BitinUserContext)
  const { respuesta, setRespuesta } = useInput()
  const { nombreFormula, setNombreFormula,
    fechaInicioFormula, fechaVenceFormula, setFormatedDate,
    setFormatedDateVence, open, setOpen, open2, setOpen2,
    open3, setOpen3, opcion, setOpcion,
    Seleccionpath, setSeleccionpath,writeNewFormula,seleccionados } = useFormulario()


  return (
    <View style={{}}>
      <Reciever texto="Escribe un nombre para la formula" />
      <InputSender username={BitinContext.userName}
        label="Nombra tu Formula"
        respuesta={respuesta}
        setRespuesta={setRespuesta}
        setNombreFormula={setNombreFormula}
        placeholder={"Nombre de la Formula"}
      />
      {nombreFormula && <Reciever texto="¿En que fecha escribieron esta formula?" />}
      {nombreFormula && <TouchableOpacity onPress={() => setOpen(true)}>
        <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="presiona para seleccionar" />
      </TouchableOpacity>}
      <DateTimePicker open={open} mode={"date"} setFormatedDate={setFormatedDate} setOpen={setOpen} />
      {fechaInicioFormula && <Reciever texto="¿En que fecha expira la formula?" />}
      {fechaInicioFormula && <TouchableOpacity onPress={() => setOpen2(true)}>
        <CardTogggleBotSheet username={BitinContext.userName} texto="presiona para seleccionar" />
      </TouchableOpacity>}
      <DateTimePicker open={open2} mode={"date"} setFormatedDate={setFormatedDateVence} setOpen={setOpen2} />
      {fechaVenceFormula && <Reciever texto="Registremos algunos fármacos" />}
      {fechaVenceFormula && BitinContext.medicamentos && <Reciever texto="Tienes algunos medicamentos registrados" />}
      {fechaVenceFormula && BitinContext.medicamentos && <Reciever texto="¿Te gustaria registrar algunos a esta formula?" />}
      {fechaVenceFormula && BitinContext.medicamentos && <TouchableOpacity onPress={() => setOpen3(true)}>
        <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="presiona para seleccionar" />
      </TouchableOpacity>}
      <DialogOptions open={open3} setOpen={setOpen3} setOpcion={setOpcion} opcion={opcion} setSeleccionpath={setSeleccionpath} />
      {Seleccionpath && opcion === 1 && <Reciever texto="¿Que medicamentos quieres registrar?" />}
      {Seleccionpath && opcion === 1 && <ShowMedicamentosContext nombreFormula={nombreFormula} fechaInicioFormula={fechaInicioFormula}
       fechaVenceFormula={fechaVenceFormula}  writeNewFormula={writeNewFormula}  setIsFormula={setIsFormula} />}
      {Seleccionpath && opcion === 2 && <Reciever texto=" registraremos un nuevo medicamento" />}
      {Seleccionpath && opcion === 2 && <RegFormulaMedicina nombreFormula={nombreFormula} fechaInicioFormula={fechaInicioFormula}
       fechaVenceFormula={fechaVenceFormula}  writeNewFormula={writeNewFormula} setIsFormula={setIsFormula}
      />}


    </View>
  )
}

export default RegFormula

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  reciever: {
    //padding: 15,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    //backgroundColor: "red",
    alignSelf: "flex-end",
    borderRadius: 50,
    marginRight: 5,
    marginBottom: 5,
    //maxWidth: "80%",
    position: "relative",
  },
  sender: {
    //padding: 15,
    backgroundColor: "#F400A2",
    //backgroundColor: "blue",
    alignSelf: "flex-start",
    borderRadius: 5,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
    color: "white",

  }, button: {},
  placeholder: {
    color: "white",
  }, avatarReciever: {
    width: 40,
    height: 40,
    borderRadius: 75,
    alignSelf: "flex-end",
    marginTop: -5,
  },
  avatarSender: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
})