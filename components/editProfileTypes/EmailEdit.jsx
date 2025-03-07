'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()

  useEffect(()=>{
    console.log("currentUser: ",currentUser)
  }, [currentUser])
  return (
    <div >        
        {currentUser?.displayName}
    </div>
  )
}
