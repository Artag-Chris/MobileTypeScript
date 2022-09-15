import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useContext } from 'react';
import { BitinUserContext } from "../context/bitinContext/BitinUserContext";

//algo de  este pedazo esta malo


export const useSignOut = () => {
    const { signOutContext } = useContext(BitinUserContext);
    const Out = () => {

        signOut(auth).then(() => {
            console.log("Sign-out successful.")

        }).then(() => {
            signOutContext();
        })
            .catch((error) => {
                // An error happened.
            });
    }
    return { Out }
}