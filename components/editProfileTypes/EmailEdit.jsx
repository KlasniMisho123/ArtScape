'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()
  const [hashedEmail, setHashedEmail ] = useState("")

  

  async function hashingEmail() {
      let userEmail = currentUser?.email
      let emailFirstLetter = currentUser?.email.slice(0, 1) 

      if(userEmail) {
        let emailLastLetter =  userEmail.indexOf("@")
        setHashedEmail(userEmail.slice(0, emailLastLetter))
      } else {
        setHashedEmail("")
      }
  }

  useEffect( ()=> {
    console.log("currentUser: ",currentUser)
    hashingEmail()
  }, [currentUser])

  return (
    <div className=''>        
        {hashedEmail}
    </div>
  )
}
