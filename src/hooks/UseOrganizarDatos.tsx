import { useContext, useState, useEffect } from "react"
import { AgendaSchedule, DateData } from "react-native-calendars";
import { BitinUserContext } from "../context/bitinContext/BitinUserContext"




export const UseOrganizarDatos = () => {
  const { BitinContext } = useContext(BitinUserContext)
  const [medicamentosArg, setMedicamentosArg] = useState<any>([]);
  const [citasArg, setCitasArg] = useState<any>([]);
  const [formulasArg, setFormularArg] = useState<any>([])
  const [sintomasArg, setSintomasArg] = useState<any>([])

  const organizarDatosMedicamento = () => {
    let ayudanteMedicamentos: any[] = [];


   
    for (let i = 0; i < BitinContext.medicamentos.length; i++) {
      let { nombreMedicamento, intensidad, fechaVenceMedicamento, fechaInicioMedicamento, dosis } = BitinContext.medicamentos[i]

      ayudanteMedicamentos.push({
        [fechaVenceMedicamento]:
          [{ nombreMedicamento, intensidad, fechaInicioMedicamento, dosis }]
      })
    }
    setMedicamentosArg(ayudanteMedicamentos);




  let reduceMedicamento = ayudanteMedicamentos.reduce((acc, curr) => {
      for (let key in curr) {

        acc[key] = curr[key]
    
      }
      return acc
    }, {})
  setMedicamentosArg(reduceMedicamento)             
 


  }
  

  useEffect(() => {
    organizarDatosMedicamento()
    //loadItems(medicamentosArg)
    return () => {
      organizarDatosMedicamento()
    }
  }, [BitinContext.refresh])


  return { medicamentosArg, citasArg, formulasArg, sintomasArg }
}

