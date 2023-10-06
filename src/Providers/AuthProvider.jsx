import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
export const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubcribe()
        }
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        signwithGoogle
    }
   
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;