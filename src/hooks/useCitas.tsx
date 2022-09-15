import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { format } from 'date-fns'
import useOpenPicks from './useOpenPicks'
import { BitinUserContext } from '../context/bitinContext/BitinUserContext'
import { Cita } from '../interfaces/interfaces';
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { useNavigation } from '@react-navigation/native'



export const useCitas = () => {
    const { BitinContext,setNewCita,setFresh } = useContext(BitinUserContext)
    const { open, setOpen, open2, setOpen2, } = useOpenPicks()
    const navigation=useNavigation()

    const [nombreCita, setNombreCita] = useState<any>(null)
    const [lugarCita, setLugarCita] = useState<any>(null)
    const [fechaCita, setFechaCita] = useState<any>(null)
    const [horaCita, setHoraCita] = useState<any>(null)


    const setFormatedDate = (date: any) => {
        setFechaCita(format(date, 'yyyy-MM-dd'))
        setOpen(false);
    };

    const setFormatedHour = (date: any) => {
        setHoraCita(format(date, 'HH:mm:ss'))
        setOpen2(false);
    };

    const writeNewCita = async () => {

        const newCita: Cita = {
            username: BitinContext.userName,
            email: BitinContext.email,
            nombreCita: nombreCita,
            lugarCita: lugarCita,
            fechaCita: fechaCita,
            horaCita: horaCita


        }

        const docRef = doc(collection(db, "Cita"),);
        await setDoc(docRef, newCita, { merge: true })
            .then(() => {
                alert("Cita agendada");
                navigation.goBack()
                setFresh(!BitinContext.refresh )
            })
            .catch((error) => {
                // An error occurred
                console.log(error);
            }

            )
    }


    return {
        nombreCita, setNombreCita, fechaCita, lugarCita, setLugarCita,
        setFechaCita, setFormatedDate, horaCita, setHoraCita, setFormatedHour,
        writeNewCita
    }
}

