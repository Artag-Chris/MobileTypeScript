import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState, useContext } from 'react';
import { db } from "../../firebase/firebaseConfig";
import { BitinUserContext } from "../context/bitinContext/BitinUserContext";
import { BitinUser } from '../interfaces/interfaces';




export const useRegistrar = () => {
    const{BitinContext,setFresh}=useContext(BitinUserContext);
    let refresh=BitinContext.refresh;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const auth = getAuth();
    
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then( async userCredential =>
            {
                await updateProfile(userCredential.user, { displayName: name })
            }).then(() => {
              // Profile updated!
              guardar();
              alert("registrado en la base de datos");
              setFresh(!refresh);

            }).catch((error) => {
              // An error occurred
              alert("error al registrar usuario, asegurese de que la contraseña sea mayor a 6 caracteres");
            });
          }
    
          const guardar = async () => {
            const docRef = doc(collection(db, "usuarios"),);
            await setDoc(docRef, {
                email,
                Nombre: name,
                apellidos :"pendiente",
                Id_eps: "pendiente", 
                Id_usuario:"pendiente", 
                
            }, { merge: true });
        }
    return { name,setName, email,setEmail, password,setPassword, imageUrl,setImageUrl, register };
}