
import {  useState } from 'react'

export const useInput = () => {
    const [respuesta, setRespuesta] =useState('')
    const [respuesta2, setRespuesta2] =useState('')
    const [numero, setNumero] = useState<any>(null)


   

  return { respuesta, setRespuesta,respuesta2,setRespuesta2, numero, setNumero }
}

