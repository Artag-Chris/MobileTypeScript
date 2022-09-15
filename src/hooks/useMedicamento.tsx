import React, { useContext, useState } from 'react'
import { format } from 'date-fns'
import useOpenPicks from './useOpenPicks';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import { Medicamento} from "../interfaces/interfaces";
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

//aqui hira la funcion relacionada con exportar  medicamento del estado?

export const useMedicamento = () => {
  const navigation=useNavigation()
  const { BitinContext,setNewMedicamento,setFresh } = useContext(BitinUserContext)
  const { setOpen, setOpen2, setOpen3 } = useOpenPicks()
  const [nombreMedicamento, setNombreMedicamento] = useState<any>(null)
  const [dosis, setDosis] = useState<any>(null)
  const [intensidad, setIntensidad] = useState<any>(null)
  const [fechaInicioMedicamento, setFechaInicioMedicamento] = useState<any>(null)
  const [fechaVenceMedicamento, setFechaVenceMedicamento] = useState<any>(null)

  const setFormatedDate = (date: any) => {
    setFechaInicioMedicamento(format(date, 'yyyy-MM-dd'))
    setOpen(false);
  };
  const setFormatedDateVence = (date: any) => {
    setFechaVenceMedicamento(format(date, 'yyyy-MM-dd'))
    setOpen2(false);
  };
  const setFormatedHour = (date: any) => {
    setIntensidad(format(date, 'HH:mm:ss'))
    setOpen3(false);
  };
  
  const writeNewMedicamento = async() => {

    const newMedicamento: Medicamento = {
      username: BitinContext.userName,
      email:BitinContext.email,
      nombreMedicamento: nombreMedicamento,
      dosis: dosis,
      intensidad: intensidad,
      fechaInicioMedicamento: fechaInicioMedicamento,
      fechaVenceMedicamento: fechaVenceMedicamento
    }
    
      const docRef = doc(collection(db, "Medicamentos"));
      await setDoc(docRef, newMedicamento, { merge: true })
      .then(() => {
        setNewMedicamento(newMedicamento)
        setFresh(!BitinContext.refresh)
      }).then(()=>{
        navigation.goBack()
        alert("Medicamento agendado");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      }
  
    )
  }

  

  return {
    nombreMedicamento, setNombreMedicamento,
    dosis, setDosis,
    intensidad, setIntensidad,
    fechaInicioMedicamento, setFechaInicioMedicamento,
    fechaVenceMedicamento, setFechaVenceMedicamento,
    setFormatedDate, setFormatedDateVence, setFormatedHour,writeNewMedicamento
  }
}

