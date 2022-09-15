import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext} from 'react'
import Reciever from './Reciever'
import InputSender from './InputSender'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext'
import CardTogggleBotSheet from './CardTogggleBotSheet'
import { useInput } from '../hooks/useInput'
import { useFormulario } from '../hooks/useFormulario';
import TimeDatePicker from './TimeDatePicker'
import DateTimePicker from './DateTimePicker'
import Dialog from './Dialog';
import ShowFormula from './ShowFormula'

const RegFormulaMedicina = (props:any) => {  
    const { BitinContext } = useContext(BitinUserContext);
    const { respuesta, setRespuesta, respuesta2, setRespuesta2} = useInput()
    const{setNombreMedicamento, nombreMedicamento,dosis, setDosis,
        fechaInicioMedicamento, seleccionados,fechaVenceMedicamento,
        intensidad,open, setOpen, setIntensidad, open2, setOpen2, open3, setOpen3,open4, setOpen4,
        setFormatedDateFM,setFormatedDateVenceFM,writeNewMedicamentoFormula,setFormatedHourFM,continuar}=useFormulario()

  return (

    <View style={{}}>
    <Reciever texto="Muy bien" />
    <Reciever texto="Escribe el nombre del Medicamento" />
    <InputSender username={BitinContext.userName}
      label="Nombra el Medicamento"
      respuesta={respuesta}
      setRespuesta={setRespuesta}
      setNombreFormula={setNombreMedicamento}
      placeholder={"Como se llama el medicamento"}
    />
    {nombreMedicamento && <Reciever texto="Cuanta es la dosis" />}
    {nombreMedicamento && <Reciever texto="O los gramos Miligramos etc...?" />}
    {nombreMedicamento && <InputSender username={BitinContext.userName}
      label="Dosis"
      respuesta={respuesta2}
      setRespuesta={setRespuesta2}
      setNombreFormula={setDosis}
      placeholder={"medida de la dosis"}
      keyboardType="default"
    />}

    {dosis && <Reciever texto="¿Cuando iniciaste a tomarlo?" />}
    {dosis && <TouchableOpacity onPress={() => setOpen(true)}>
      <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="Seleciona una fecha" />
    </TouchableOpacity>}
    <DateTimePicker open={open} mode={"date"} setFormatedDate={setFormatedDateFM} setOpen={setOpen} />
    {fechaInicioMedicamento && <Reciever texto="¿Cuando vence la formula?" />}
    {fechaInicioMedicamento && <TouchableOpacity onPress={() => setOpen2(true)}>
      <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="Seleciona una fecha" />
    </TouchableOpacity>}
    <DateTimePicker open={open2} mode={"date"} setFormatedDate={setFormatedDateVenceFM} setOpen={setOpen2} />
    {fechaVenceMedicamento && <Reciever texto="¿Cual es la intencidad horaria?" />}
    {fechaVenceMedicamento && <TouchableOpacity onPress={() => setOpen3(true)}>
      <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="Seleciona una Hora" />
    </TouchableOpacity>}
    <TimeDatePicker open={open3} setOpen={setOpen3} mode="time" setTime={setFormatedHourFM} />

    {intensidad?<Reciever texto="¿Deseas guardar este nuevo medicamento?" />:null}
    {intensidad?<TouchableOpacity onPress={() => setOpen4(true)}>
      <CardTogggleBotSheet username={BitinContext.userName} keyboardType={"default"} texto="¿Guardar?" />
    </TouchableOpacity>:null}
   {intensidad?<Dialog title={"Nuevo Medicamento"} nombreMedicamento={nombreMedicamento} dosis={dosis}
    intensidad={intensidad} fechaInicioMedicamento={fechaInicioMedicamento} fechaVenceMedicamento={fechaVenceMedicamento}
    writeNewMedicamento={writeNewMedicamentoFormula} 
  />:null}
  {continuar&&<Reciever texto="Guardemos ahora esta formula con su medicamento"/>}
  {continuar&&<ShowFormula nombreFormula={props.nombreFormula} fechaInicioFormula={props.fechaInicioFormula}
                fechaVenceFormula={props.fechaVenceFormula} seleccionados={seleccionados} writeNewFormula={props.writeNewFormula}
                setIsFormula={props.setIsFormula} /> }
  </View>
  )
}

export default RegFormulaMedicina

const styles = StyleSheet.create({})