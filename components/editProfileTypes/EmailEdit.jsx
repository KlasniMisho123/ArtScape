'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()
  const [hashedEmail, setHashedEmail ] = useState("")

  let currentUSSer = currentUser?.email.slice()

  useEffect(()=> {
    console.log("currentUser: ",currentUser)
    
  }, [currentUser])

  return (
    <div className=''>        
        { currentUSSer}
    </div>
  )
}
