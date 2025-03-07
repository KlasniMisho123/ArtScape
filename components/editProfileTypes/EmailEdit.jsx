'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()
  const [hashedEmail, setHashedEmail ] = useState("")

  

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

  useEffect( ()=> {
    console.log("currentUser: ",currentUser)
    hashingEmail()
  }, [currentUser])

  //  {hashedEmail}
  return (
    <div className='min-h-[75vh] '>        
        <div className='flex bg-[#134B70] w-[70%] mx-auto mt-4 items-center p-4 text-white sm:text-md  md:text-lg lg:text-xl '>
            Email Configuration
        </div>
    </div>
  )
}
