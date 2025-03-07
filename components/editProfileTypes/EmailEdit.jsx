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

  return (
    <div className='min-h-[75vh] w-[70%] mx-auto '>        
        <div className='flex flex-col bg-[#134B70]  mt-4 justify-center p-4 text-white  md:text-sm lg:text-md '>
            {/* <span className='cursor-pointer'> Home &gt; Account &gt; Email Preferences </span> */}
            <h1 className='text-white sm:text-md  md:text-lg lg:text-xl '> Email Configuration </h1>
        </div>
        <div className='my-10 bg-'> 
          <h2 className='md:text-md lg:text-lg'> {hashedEmail} </h2>
        </div>
    </div>
  )
}
