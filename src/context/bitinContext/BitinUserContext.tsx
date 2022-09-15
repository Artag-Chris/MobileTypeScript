import { createContext, useReducer } from "react";
import { Info } from "../../hooks/useLogin";
import { BitinUser, BitinUserProps, Cita, Formula, Medicamento, Sintoma } from '../../interfaces/interfaces';
import { BitinReducer } from "./BitinReducer";


export const inicialBitinContext: BitinUser = {
    isLogin: false,
    userName: "Federico",
    email: "quico@gmail.com",
    refresh: false,
}



//que expone el contexto 

export const BitinUserContext = createContext({}as BitinUserProps);

//provider que se encarga de proveer el contexto

export const BitinUserProvider = ({children}:any)=>{
   const [BitinContext,dispatch]= useReducer(BitinReducer,inicialBitinContext);

    const signIn = (info:Info)=>{
       
        dispatch({type:"signIn",payload:info})
    }
    const signOutContext = ()=>{
        dispatch({type:"signOutContext"});
    }
    const setNewMedicamento = (medicamento:Medicamento)=>{
        dispatch({type:"setNewMedicamento",payload:medicamento});
    }
    const setNewCita = (cita:Cita)=>{
        dispatch({type:"setNewCita",payload:cita});
    }
    const getMedicamento = (medicamento:Medicamento)=>{
        dispatch({type:"getMedicamento",payload:medicamento});
    }
    const getCita = (cita:Cita)=>{
        dispatch({type:"getCita",payload:cita});
    }
    const setFormula = (formula:Formula)=>{
        dispatch({type:"setFormula",payload:formula});
    }
    const getFormula = (formula:Formula)=>{
        dispatch({type:"getFormula",payload:formula});
    }
    const setSintoma = (sintomas:any)=>{
        dispatch({type:"setSintoma",payload:sintomas});
    }
    const getSintoma = (sintomas:any)=>{
        dispatch({type:"getSintoma",payload:sintomas});
    }
    const setFresh = (fresh:boolean)=>{ 
        dispatch({type:"setFresh",payload:fresh});
    }

    return(
        <BitinUserContext.Provider value={{
            BitinContext,
            signIn,
            signOutContext,
            setNewMedicamento,
            setNewCita,
            getMedicamento,
            getCita,
            setFormula,
            getFormula,
            setSintoma,
            getSintoma,
            setFresh

        }}>
            {children}
        </BitinUserContext.Provider>
    )
}