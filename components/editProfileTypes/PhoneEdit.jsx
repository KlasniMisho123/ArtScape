'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function PhoneEdit() {
  const { currentUser } = useAuth()
    const [hashedNumber, setHashedNumber ] = useState("")
    const [newNumber, setNewENumber ] = useState("")
    const [verifySection, setVerifySection ] = useState(false)
    const [verificationCode, setVerificationCode ] = useState("")
    const [generatedVerificationCode, setGeneratedVerificationCode ] = useState("")

    async function hashingEmail() {
      let userEmail = currentUser?.email
      if(userEmail) {
          let emailFirstLetter = currentUser?.email.slice(0, 1) 
  
          let emailLastLetterIndex =  userEmail.indexOf("@")
          let emailLastLetter = userEmail.slice((emailLastLetterIndex-1), emailLastLetterIndex)
          let emailDomain = userEmail.slice((emailLastLetterIndex))
          setHashedEmail(`${emailFirstLetter}***${emailLastLetter}${emailDomain}`)
        } else {
        }
    }
    
  return (
    <div>PhoneEdit</div>
  )
}
