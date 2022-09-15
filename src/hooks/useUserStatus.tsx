
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useContext } from 'react';
import { useState } from "react";
import { db } from '../../firebase/firebaseConfig';
import { BitinUserContext } from "../context/bitinContext/BitinUserContext";
import { Medicamento } from '../interfaces/interfaces';





//aca se puede actualizar el estado del context 

export const useUserStatus = () => {
  const { BitinContext, getMedicamento, getCita, getFormula, setSintoma,getSintoma } = useContext(BitinUserContext);
  const [citas, setCitas] = useState<any>(null)
  const [medicamentos, setMedicamentos] = useState<any>(null)
  const [formulas, setFormulas] = useState<any>(null)


  const getCitas = async () => {
    const queryCita = query(collection(db, "Cita"), where("email", "==", BitinContext.email), where("username", "==", BitinContext.userName))
    const querySnapshotCitas = await getDocs(queryCita);
    let ayudanteCitas: any = [] //array para guardar los datos de la cita 
    querySnapshotCitas.forEach((doc) => {

      let { username, nombreCita, lugarCita, horaCita, fechaCita, email } = doc.data();

      ayudanteCitas.push({ username, nombreCita, lugarCita, horaCita, fechaCita, email })
    })
    if (ayudanteCitas.length > 0) {
      getCita(ayudanteCitas)
      console.log(" set en citas")
    }


  }

  const getMedicamentos = async () => {
    const queryMedicamento = query(collection(db, "Medicamentos"), where("email", "==", BitinContext.email), where("username", "==", BitinContext.userName))
    const querySnapshotMedicamentos = await getDocs(queryMedicamento);
    let ayudanteMedicamentos: any = [] //array para guardar los datos de los medicamentos
    querySnapshotMedicamentos.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data())
      let { username, nombreMedicamento, intensidad, fechaVenceMedicamento, fechaInicioMedicamento, email, dosis } = doc.data()
      ayudanteMedicamentos.push({ username, nombreMedicamento, intensidad, fechaVenceMedicamento, fechaInicioMedicamento, email, dosis })
    })

    if (ayudanteMedicamentos.length > 0) {
      getMedicamento(ayudanteMedicamentos)
       console.log("set en contexto medicamentos")
    }

  }

  //bajo construccion
  const getFormulas = async () => {
    const queryFormula = query(collection(db, "Formulas"), where("email", "==", BitinContext.email), where("username", "==", BitinContext.userName))
    const querySnapshotFormulas = await getDocs(queryFormula)
    let ayudanteFormulas: any = []
    querySnapshotFormulas.forEach((doc) => {

      let { username, nombreFormula, fechaVenceFormula, fechaInicioFormula, email, medicamentos } = doc.data()

      ayudanteFormulas.push({ username, nombreFormula, fechaVenceFormula, fechaInicioFormula, email, medicamentos })
    })
    if (ayudanteFormulas.length > 0) {
      getFormula(ayudanteFormulas)
      console.log("set en contexto formulas")
    }

  }

  const getSintomas = async () => {
    const querySintomas = query(collection(db, "Sintomas"), where("email", "==", BitinContext.email), where("username", "==", BitinContext.userName))
    const querySnapshotSintomas = await getDocs(querySintomas)
    let ayudanteSintomas: any = [];
    querySnapshotSintomas.forEach((doc) => {

      let { email,sintomas, username  } = doc.data();

      ayudanteSintomas.push({ email,sintomas, username  })
      console.log("adentro del ciclo")
    })
    if (ayudanteSintomas.length > 0) {
      setSintoma(ayudanteSintomas)
      console.log("set en context sintoma")
    }

  }


  useEffect(() => {
    getCitas()
    return () => {
      setCitas(null)
    }
  }, [BitinContext.refresh])
  useEffect(() => {
    getMedicamentos()
    return () => {
      setMedicamentos(null)
    }
  }, [BitinContext.refresh])
  useEffect(() => {
    getFormulas()
    return () => {
      setFormulas(null)
    }
  }, [BitinContext.refresh])
  useEffect(() => {
    getSintomas()
    return () => {
    getSintomas()
    }
  }, [BitinContext.refresh])

  return { citas, medicamentos, getCitas, getMedicamentos,getFormulas,getSintomas }

}








