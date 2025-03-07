'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function EmailEdit() {
  const { currentUser } = useAuth()
  const [hashedEmail, setHashedEmail ] = useState("")
  const [newEmail, setNewEmail ] = useState("")
  const [verifySection, setVerifySection ] = useState(false)
  const [verificationCode, setVerificationCode ] = useState("")

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

  function clearInputs() {
    setNewEmail("")
  }

  function handleSubmit() {
    setVerifySection(true)
  }

  useEffect( ()=> {
    console.log("currentUser: ",currentUser)
    hashingEmail()
  }, [currentUser])

  return (
    <div className='min-h-[75vh] w-[70%] mx-auto '>        
        <div className='flex gap-2 bg-[#134B70] mt-2 items-center p-4 text-white  md:text-sm lg:text-md rounded '>
            <i className="fa-solid fa-envelope md:text-md lg:text-lg mr-1"></i>{/* <span className='cursor-pointer'> Home &gt; Account &gt; Email Preferences </span> */}
            <h1 className='text-white sm:text-md  md:text-lg lg:text-xl '> Email Configuration</h1>
        </div>
        <div className='flex gap-4 flex-col my-10 bg-[#103d5c] rounded p-4 '> 
          <div> 
            <h2 className='md:text-md lg:text-lg'>Change Email For: <span> {hashedEmail} </span> </h2>
          </div>
          <div className='flex flex-col gap-2 '>
          <div className="bg-[#1a5276] p-4 rounded text-gray-200">
          <h3 className="text-lg">How It Works:</h3>
            <ul className="list-disc pl-5">
              <li>Enter your new email address.</li>
              <li>Click "Submit" to receive a confirmation code previous Email.</li>
              <li>Enter code in verify section.</li>
            </ul>
          </div>
            <label> Enter New Email </label>
            <input 
              className='border-2 border-black bg-[#243642] rounded p-2 text-white'
              value={newEmail}
              onChange={(e)=>{setNewEmail(e.target.value)}}
              placeholder='New email'
            />  
          </div>
          {verifySection?
          <div className="flex flex-col gap-2 border-2 border-gray-500 rounded p-4 bg-[#1a2b3c] text-white space-y-3">
          <div className="flex justify-between items-center gap-2 ">
            <p className="text-gray-300 text-sm md:text-md">
              A verification code has been sent to your email.
            </p>
            <button className="text-red-500 rounded-full p-2 hover:texst-red-800 scale-150 hover:scale-125 transition-all duration-200 ease-in-out"
              onClick={()=>{setVerifySection(false)}}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        
        <div className='flex gap-2'> 
          <input 
            className="border-2 border-gray-500 bg-[#243642] rounded p-2 text-white w-full placeholder-gray-400"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
          />  
            <button className="w-max whitespace-nowrap px-4 py-2 bg-[#1a5276] text-white rounded shadow-md hover:opacity-75 hover:shadow-none 
            transition-all duration-300 ease-in-out 
            hover:bg-[#2a78a8] hover:opacity-90 hover:scale-95" 
            
            >
              Submit Code
            </button>

        </div>

          <p className="text-xs text-gray-400">
            Didn’t receive the code? <span className="text-blue-400 cursor-pointer hover:underline">Resend</span>
          </p>
        </div>
        
          : ""}
          <div className='flex justify-end gap-16 ml-[10px] mt-[40px]'>
          <button
           className={'rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 ' + (verifySection?  "cursor-not-allowed opacity-50" : "")}
           onClick={clearInputs}
           disabled={verifySection}
          > Cancel</button>
          <button className={'rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '  + (verifySection?  "cursor-not-allowed opacity-50" : "")}
          onClick={handleSubmit}
          disabled={verifySection}
          > Submit </button>
        </div>
        </div>
    </div>
  )
}
