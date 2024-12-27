'use client'
import { auth } from "../firebase"
import React, { useContext , useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated ] = useState(false)
    const [isLoading, setIsLoading ] = useState(false)
    const [authenticatingActive, setAuthenticatingActive] = useState(true)
    const [userDataObj, setUserDataObj] = useState(0)
    
    function signup(email, password) {
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

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try{
                // Set the user to our local context state
                setIsLoading(true)
                setCurrentUser(user)
                if (!user) {
                    return
                }
            } catch(err) {
                console.log("Fetching User Err: ", err.message)
            } finally {
                console.log("currentUser: ",currentUser)
                setIsLoading(false)
            }
        })
    },[

    ])

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
 