import { createContext, useContext, useEffect, useState } from "react";
import { auth}  from '../../utils/init-firebase'

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
          onAuthStateChanged, signOut, 
          GoogleAuthProvider,
           signInWithPopup, 
           sendPasswordResetEmail } from 'firebase/auth';








const AuthContext = createContext({
    currentUser : null,
    register : () => Promise,
    login : () => Promise,
    logout : () => Promise,
    signInWithGoogle : () => Promise,
    forgotPassword : () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children}){
    const [currentUser, sentCurrentUser] = useState(null)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            sentCurrentUser(user)
        })
        return () => {
           unsuscribe()
        };
    }, [])
    function register (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login (email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/login',
        })
    }
    function signInWithGoogle (){
            const provider = new GoogleAuthProvider()
            return  signInWithPopup(auth, provider)
    }
    const value = {
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        forgotPassword
    }
    return <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
}