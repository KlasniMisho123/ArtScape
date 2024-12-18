'use client'
 import React, { useContext , useEffect, useState } from 'react'
 
 const AuthContext = React.createContext()


 export function useAuth() {
    return useContext(AuthContext)
 }

 export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [authenticatingActive, setAuthenticatingActive] = useState(true)
    const value = 
    {
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
 }
 