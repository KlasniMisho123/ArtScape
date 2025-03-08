'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function PhoneEdit() {
  const { currentUser } = useAuth()
    const [hashedPhoneNumber, setHashedPhoneNumber ] = useState("")
    const [newPhoneNumber, setNewPhoneNumber ] = useState("")
    const [verifySection, setVerifySection ] = useState(false)
    const [verificationCode, setVerificationCode ] = useState("")
    const [generatedVerificationCode, setGeneratedVerificationCode ] = useState("")

    async function hashingPhoneNumber() {
      let userPhoneNumber = currentUser?.email
      if(userEmail) {
          let emailFirstLetter = currentUser?.email.slice(0, 1) 
  
          let emailLastLetterIndex =  userEmail.indexOf("@")
          let emailLastLetter = userEmail.slice((emailLastLetterIndex-1), emailLastLetterIndex)
          let emailDomain = userEmail.slice((emailLastLetterIndex))
        } else {
        }
    }
    useEffect(()=>{
      console.log("currentUser: ",currentUser)
    },[])
  return (
    <div>PhoneEdit</div>
  )
}
