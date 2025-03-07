'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()
  const [hashedEmail, setHashedEmail ] = useState("")
  const [newEmail, setNewEmail ] = useState("")
  

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
        <div className='flex flex-col bg-[#134B70] mt-2 justify-center p-4 text-white  md:text-sm lg:text-md rounded '>
            {/* <span className='cursor-pointer'> Home &gt; Account &gt; Email Preferences </span> */}
            <h1 className='text-white sm:text-md  md:text-lg lg:text-xl '> Email Configuration</h1>
        </div>
        <div className='flex gap-4 flex-col my-10 bg-[#103d5c] rounded p-4 '> 
          <div> 
            <h2 className='md:text-md lg:text-lg'>Change Email For: <span> {hashedEmail} </span> </h2>
          </div>
          <div className='flex flex-col gap-2 '>
            <label> Enter New Email </label>
            <input 
              className='border-2 border-black bg-[#243642] rounded p-2 text-white'
              value={newEmail}
              onChange={(e)=>{setNewEmail(e.target.value)}}
              placeholder='Email'
            />  
          </div>
          
        </div>
    </div>
  )
}
