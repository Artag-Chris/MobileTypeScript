import { Info } from '../../hooks/useLogin';
import { BitinUser, Cita, Formula, Medicamento, Sintoma } from '../../interfaces/interfaces';

export type BitinAction =
|{type: "signIn",payload:Info}
|{type: "signOutContext"}
|{type: "setNewMedicamento", payload:Medicamento}
|{type: "setNewCita", payload:Cita}
|{type: "getMedicamento", payload:Medicamento}
|{type: "getCita", payload:Cita}
|{type: "setFormula", payload:Formula}
|{type: "getFormula", payload:any}
|{type: "setSintoma", payload:any}
|{type: "getSintoma", payload:Sintoma}
|{type: "setFresh", payload:any}


export const BitinReducer=(state:BitinUser,action:BitinAction):BitinUser=>{
    switch(action.type){
        case "signIn":
            return {
                ...state,
                isLogin:true,
                userName:action.payload.userName,
                email:action.payload.email,
            }
        case "signOutContext":
            return {
                ...state,
                isLogin:false,
                userName:"",
                email:"",
                formulas:[],
                medicamentos:[],
                citas:[],
                sintomas:[],
                refresh:false,

            }
       
        case "setNewMedicamento":
            return {
                ...state,
                medicamentos:action.payload
            }
        case "setNewCita":  
            return {
                ...state,
                citas:action.payload
            }
        case "getMedicamento":
            return {
                ...state,
                medicamentos:action.payload
            }
        case "getCita":
            return {
                ...state,
                citas:action.payload
            }
        case "setFormula":
            return {
                ...state,
                formulas:action.payload
            }
        case "getFormula":
            return {
                ...state,
                formulas:action.payload
            }
        case "setSintoma":
            return {
                ...state,
                sintomas:action.payload
            }
        case "getSintoma":
            return {
                ...state,
                sintomas:action.payload
            }
        case "setFresh":
            return {
                ...state,
                refresh:action.payload
            }
  
            
        default:
            return state;
    }
}

 

