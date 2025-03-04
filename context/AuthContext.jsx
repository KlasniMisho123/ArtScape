'use client'
import { auth, db } from "../firebase"
import React, { useContext , useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
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
    const [isLightMode, setIsLightMode] = useState("");

    
    async function signup(email, password, username) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: username
        });

        return userCredential.user;
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

    async function updateAvatar(avatar) {
        if (!auth.currentUser) {
            console.error("No user is logged in.");
            return;
        }
    
        try {
            await updateProfile(auth.currentUser, {
                photoURL: avatar
            });
        } catch (error) {
            console.error("Error updating avatar:", error.message);
        }
    }

    async function handleGeneralUpdate(username) {
        if (!auth.currentUser) {
            console.error("No user is logged in.");
            return;
        }
        
        try {
            await updateProfile(auth.currentUser, {
                displayName: username
            });
            // cant add new keys and values in userobject. so need to create collection
        } catch(err) {
            console.log(err.message)
        }
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
                let firebaseData = {}
                setIsAuthenticated(true)
                if (docSnap.exists()) {
                    firebaseData = docSnap.data()
                }
                setUserDataObj(firebaseData)
            } catch(err) {
                console.log("Fetching User Err: ", err.message)
            } finally {
                setIsLoading(false)
            }
        })
        return unsubscribe
    },[])

    // mgoni arari sachiro,[login, signup, logout] //2 logoutis errors agdebs
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
                let firebaseData = {}
                setIsAuthenticated(true)
                if (docSnap.exists()) {
                    firebaseData = docSnap.data()
                }
                setUserDataObj(firebaseData)
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
        userDataObj,
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        handleGeneralUpdate,
        updateAvatar,
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
 