'use client'
import { auth, db } from "../firebase"
import React, { useContext , useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"


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
    // const [isLightMode, setIsLightMode] = useState(() => {
    //     return localStorage.getItem("theme") === "dark" ? false : true;
    //   });
    const [isLightMode, setIsLightMode] = useState(true);

    
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setUserDataObj(null)
        setCurrentUser(null)
        setIsAuthenticated(false)
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
                // if user exists, fetch data from firestore database
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                // console.log(user.email)
                let firebaseData = {}
                setIsAuthenticated(true)
                // if (docSnap.exists()) {
                //     firebaseData = docSnap.data()
                // }
                // setUserDataObj(firebaseData)
                // console.log(userDataObj)
            } catch(err) {
                console.log("Fetching User Err: ", err.message)
            } finally {
                setIsLoading(false)
            }
        })
        return unsubscribe
    },[])

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try{
                // Set the user to our local context state
                setIsLoading(true)
                setCurrentUser(user)
                if (!user) {
                    return
                }

                // if user exists, fetch data from firestore database
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                // console.log(user.email)
                let firebaseData = {}
                setIsAuthenticated(true)
                // if (docSnap.exists()) {
                //     firebaseData = docSnap.data()
                // }
                // setUserDataObj(firebaseData)
                // console.log(userDataObj)
            } catch(err) {
                console.log("Fetching User Err: ", err.message)
            } finally {
                setIsLoading(false)
            }
        })
        return unsubscribe
    },[login, signup, logout])

    

    useEffect(() => {
        const theme = localStorage.getItem("theme") 
        if(theme === "dark") {
            setIsLightMode(false)
        } else {
            setIsLightMode(true)
        }

        document.body.classList.toggle("dark-theme", !isLightMode);
      }, [isLightMode]);

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout,
        isLightMode,
        setIsLightMode
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
 