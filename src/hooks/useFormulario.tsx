import { format } from "date-fns"
import { collection, doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react"
import { db } from "../../firebase/firebaseConfig";
import { BitinUserContext } from "../context/bitinContext/BitinUserContext";
import useOpenPicks from './useOpenPicks';
import { useNavigation } from '@react-navigation/native';
import { Medicamento } from '../interfaces/interfaces';




export const useFormulario = () => {
  const { open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4 } = useOpenPicks()
  const { BitinContext, setFormula, setNewMedicamento,setFresh } = useContext(BitinUserContext)
  const navigation = useNavigation()

  ///////---------------estados relacionados con la formula-------------------//////
  const [nombreFormula, setNombreFormula] = useState<any>(null)
  const [fechaInicioFormula, setFechaInicioFormula] = useState<any>(null)
  const [fechaVenceFormula, setFechaVenceFormula] = useState<any>(null)
  const [opcion, setOpcion] = useState(1)
  const [Seleccionpath, setSeleccionpath] = useState<any>(null)
  const [selectedId, setSelectedId] = useState<any>(null);
  const [checkedID, setCheckedID] = useState<Boolean>(false)
  const [farmacos, setFarmacos] = useState<any[]>([...BitinContext?.medicamentos]);
  const [seleccionados, setSeleccionados] = useState<any[]>([]) ///este array debe ser usado incluso en los nuevos registros
  const [refresh, setRefresh] = useState<Boolean>(false);

  //////////////-----------------estados relacionados con los medicamentos-------------------//////
  const [nombreMedicamento, setNombreMedicamento] = useState<any>(null)
  const [dosis, setDosis] = useState<any>(null)
  const [fechaInicioMedicamento, setFechaInicioMedicamento] = useState<any>(null)
  const [fechaVenceMedicamento, setFechaVenceMedicamento] = useState<any>(null)
  const [intensidad, setIntensidad] = useState<any>(null)
  const [continuar, setContinuar] = useState<any>(null)

  const handleClickBorrar = (item: any) => {
    //filter que no devuelve el mismo elemento
    const newfarmacos = farmacos.filter(farmacos => farmacos.nombreMedicamento !== item.nombreMedicamento)
    setFarmacos(newfarmacos)
    return [...farmacos]
  }
  const handleClickAgregar = (item: any) => {
    const newSelected = { ...item }
    setSeleccionados(prevData => [...prevData, newSelected])
    return [...seleccionados]
  }

  const setFormatedDate = (date: any) => {
    setFechaInicioFormula(format(date, 'yyyy-MM-dd'))
    setOpen(false);
  };
  const setFormatedDateFM = (date: any) => {
    setFechaInicioMedicamento(format(date, 'yyyy-MM-dd'))
    setOpen(false);
  };
  const setFormatedDateVence = (date: any) => {
    setFechaVenceFormula(format(date, 'yyyy-MM-dd'))
    setOpen2(false);
  };
  const setFormatedDateVenceFM = (date: any) => {
    setFechaVenceMedicamento(format(date, 'yyyy-MM-dd'))
    setOpen2(false);
  };
  const setFormatedHour = (date: any) => {
    setIntensidad(format(date, 'HH:mm:ss'))
    setOpen3(false);
  };
  const setFormatedHourFM = (date: any) => {
    setIntensidad(format(date, 'HH:mm:ss'))
    
    setOpen3(false);
  };

  const writeNewFormula = async (seleccionados: any[]) => {

    const newFormula: any = {
      username: BitinContext.userName,
      email: BitinContext.email,
      nombreFormula: nombreFormula,
      fechaInicioFormula: fechaInicioFormula,
      fechaVenceFormula: fechaVenceFormula,
      medicamentos: seleccionados,
    }
    const docRef = doc(collection(db, "Formulas"));
    await setDoc(docRef, newFormula, { merge: true })
      .then(() => {
      //  setFormula(newFormula)
      setFresh(!BitinContext.refresh)
      alert("Formula agendada")
      navigation.goBack()
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      }
      )
  }
  const writeNewMedicamentoFormula = async () => {

    const newMedicamento: Medicamento = {
      username: BitinContext.userName,
      email: BitinContext.email,
      nombreMedicamento: nombreMedicamento,
      dosis: dosis,
      intensidad: intensidad,
      fechaInicioMedicamento: fechaInicioMedicamento,
      fechaVenceMedicamento: fechaVenceMedicamento
    }

    const docRef = doc(collection(db, "Medicamentos"));
    await setDoc(docRef, newMedicamento, { merge: true })
      .then(() => {
        console.log("set medicamento en seleccionados")
        setSeleccionados(prevData => [...prevData, newMedicamento])
        setFresh(!BitinContext.refresh)
        return [seleccionados]
        alert("Medicamento agendado");
      }).then(() =>
        setContinuar(true)
        
        )
      .catch((error) => {
        // An error occurred
        console.log(error);
      }

      )
  }
  return {
    nombreFormula, setNombreFormula,
    fechaInicioFormula, setFechaInicioFormula,
    fechaVenceFormula, setFechaVenceFormula,
    setFormatedDate, setFormatedDateVence,
    open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4,
    opcion, setOpcion, Seleccionpath, setSeleccionpath,
    selectedId, setSelectedId,
    checkedID, setCheckedID, farmacos, setFarmacos,
    seleccionados, setSeleccionados, refresh, setRefresh, handleClickBorrar, handleClickAgregar,
    writeNewFormula, setNombreMedicamento, dosis, setDosis,
    fechaInicioMedicamento, setFechaInicioMedicamento, fechaVenceMedicamento, setFechaVenceMedicamento,
    intensidad, setIntensidad, nombreMedicamento, setFormatedHour, writeNewMedicamentoFormula, setFormatedDateFM, setFormatedDateVenceFM,
    continuar, setContinuar, setFormatedHourFM

  }

}