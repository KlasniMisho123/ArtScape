'use client'

import { auth, db } from "../firebase"
import React, { useContext , useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

 export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [authenticatingActive, setAuthenticatingActive] = useState(true)
    const [userDataObj, setUserDataObj] = useState(0)
    setCurrentUser
    
    function signup(email, password) {
        //username?
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setUserDataObj(null)
        setCurrentUser(null)
        return signOut(auth)
    }

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
 }
 