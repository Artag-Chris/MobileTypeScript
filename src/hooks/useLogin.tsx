import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { BitinUserContext } from "../context/bitinContext/BitinUserContext";
import { useNavigation } from '@react-navigation/native';

export interface Info {
    email: string;
    userName: string;

}
export const useLogin = () => {
    const {signIn,BitinContext,setFresh}=useContext(BitinUserContext);
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     let navigation=useNavigation()
   
    const signInEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential:any) => {
                signIn({
                    email:userCredential.user.email,
                    userName:userCredential.user.displayName
                })}).then(()=>{
                    setFresh(!BitinContext.refresh)
                })

              
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Usuario O Contraseña incorrectos");
            });
    }
    return { email,setEmail, password,setPassword, signInEmail, auth }
}