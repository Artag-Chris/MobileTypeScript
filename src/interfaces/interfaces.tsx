import { Info } from "../hooks/useLogin";

export interface BitinUser{
    isLogin:boolean|null,
    userName:string|null,
       email:string|null,
       apellidos?:string|null,
       eps?:string|null,
       formulas?:any|null,
       citas?:any|null,
       medicamentos?:any|null,
       sintomas?:any|null,
       refresh?:boolean|null,
   }

export interface BitinUserProps{
    BitinContext:BitinUser;
    signIn:(info:Info)=>void;
    signOutContext:()=>void;
    setNewMedicamento:(medicamento:Medicamento)=>void;
    setNewCita:(cita:Cita)=>void;
    getMedicamento:(medicamento:Medicamento)=>void;
    getCita:(cita:Cita)=>void;
    setFormula:(formula:Formula)=>void;
    getFormula:(formula:Formula)=>void;
    setSintoma:(sintomas:Sintoma)=>void;
    getSintoma:(sintomas:Sintoma)=>void;
    setFresh:(refresh:boolean)=>void;

}


export interface Formulas {
    id: number,
    NombreFormula: string,
    vence: string,
    Medicamentos: any[]
}

export interface MedicamentosYCitas{
    id: number,
    NombreMedicamento?: string,
    NombreCita?: string,
    Hora:number,
}

export interface Medicamento {
    username:string|null,
    email: string|null,
    nombreMedicamento: string,
    dosis: string,
    intensidad: string,
    fechaInicioMedicamento: string,
    fechaVenceMedicamento: string
  }

export interface Cita {
    username:string|null,
    email: string|null,
    nombreCita:string|null,
    fechaCita:string|null,
    horaCita:string|null,
    lugarCita:string|null,
}

export interface Formula{
    username:string|null,
    email: string|null,
    nombreFormula:string|null,
    fechaInicioFormula:string|null,
    fechaVenceFormula:string|null,
    medicamentos:Medicamento[]|null,
}
export interface Sintoma{
    username:string|null,
    email: string|null,
    sintomas:any[]|null
}

