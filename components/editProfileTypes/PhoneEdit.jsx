'use client'
import { useAuth } from '@/context/AuthContext'
import axios from "axios";
import React, { useEffect, useState } from 'react'

export default function PhoneEdit() {
  const { currentUser, setPhoneNumber, setUserPhoneNumber } = useAuth()
    const [hashedPhoneNumber, setHashedPhoneNumber ] = useState("")
    const [newPhoneNumber, setNewPhoneNumber ] = useState("")
    const [phonePrefix, setPhonePrefix] = useState("")
    const [verificationCode, setVerificationCode ] = useState("")
    const [generatedVerificationCode, setGeneratedVerificationCode ] = useState("")
    const [isChangeingPhone, setIsChangeingPhone] = useState(false)
    const [verifySection, setVerifySection ] = useState(false)
    const [userEmail, setUserEmail] = useState("")

    const userPhoneNumber = currentUser?.phoneNumber
    // const userPhoneNumber = true
    const focusAnimation = ` focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300 transition duration-300 ease-in-out`


    async function hashingPhoneNumber() {
      let userPhoneNumber = currentUser?.phoneNumber
      if(userPhoneNumber) {
          // last 2 number
          setHashedPhoneNumber("")
        } else {
          console.log("User Phone Number Is Empty")
        }
    }

    function closeVerificationSection() {
      setVerificationCode("")
      setGeneratedVerificationCode("")
      setVerifySection(false)
    }

    function clearInputs() {
      setNewPhoneNumber("")
      setPhonePrefix("")
      ge
    }

    async function generateVerificationCode() {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedVerificationCode(code);
      return code;
    }

    async function handleSubmit() {
      const prevPhoneNumber = userPhoneNumber;
      const verificationCode = await generateVerificationCode()
      let fullNumber = null;
      if(!phonePrefix) {
        console.log("Phone Prefix Number Required!")
        return
      }
      if(!newPhoneNumber) {
        return console.log("Phone Number Required!")
      }

      // Combine the phone prefix and new phone number
      if (phonePrefix && newPhoneNumber) {
        fullNumber = phonePrefix + newPhoneNumber;
      }

      // Check if the user already has a phone number connected
      if (prevPhoneNumber) {
        try {
        // sending verification code to old number and then set?
        } catch(err) {
          console.log(err.message)
        }
        } else {
        try {
          // console.log("Adding new number: ", fullNumber)
          
          sendPhoneVerification(phonePrefix, newPhoneNumber, userEmail, verificationCode)

          // await setUserPhoneNumber(fullNumber);
          // clearInputs()
          // setIsChangeingPhone(false)
        } catch(err) {
          console.log("❌ Error adding new phone number:", err.message);
        }
      }
    }
    
    async function sendPhoneVerification(phonePrefix, newPhoneNumber, userEmail, verificationCode) {
      try {
        const sendPhoneResponse = await axios.post('http://localhost:5000/sendphone', {
          phonePrefix, 
          newPhoneNumber,
          verificationCode,
          userEmail
          }) 

        console.log('Server response:', sendPhoneResponse.data);
      } catch (error) {
        console.error('Error fetching data from /home:', error);
      }
    };

    function handlePhoneChangeSection() {
      setIsChangeingPhone(true)
    }

    async function verifyNumberWithCode() {
      // Check if Code that u sent matches input Code
      console.log("Verify Number With Code Dummy Text")
    }
  
    async function sendVerificationCode() {
      // send verification code on previous/new phone number
      console.log("Send Verification Code Dummy Text")
    }

    useEffect(()=>{
      console.log("currentUser: ", currentUser)
      // console.log(userPhoneNumber)
      setUserEmail(currentUser?.email)
    },[currentUser])

    return (
      <div className='min-h-[75vh] w-[70%] mx-auto text-white'>        
          <div className='flex items-center gap-2 bg-[#134B70] mt-2 p-4 text-white  md:text-sm lg:text-md rounded '>
              <i className="fa-solid fa-mobile-screen md:text-md lg:text-lg mr-1"></i>
              {/* <span className='cursor-pointer'> Home &gt; Account &gt; Email Preferences </span> */}
              <h1 className='text-white sm:text-md  md:text-lg lg:text-xl '> Phone Number Configuration: {userEmail} {verificationCode} </h1>
          </div>
          <div className='flex gap-4 flex-col my-10 bg-[#103d5c] rounded p-4 '> 
            <div> 
              <h2 className='flex items-center gap-2 md:text-md lg:text-lg'>
                Associated phone number: <span> <p className='my-2'> 
                <i className="fa-solid fa-mobile mx-1 "></i> {userPhoneNumber? `Ends with: ${userPhoneNumber}` : "Empty"} </p>  </span>
              </h2>

              {userPhoneNumber ? (
                <button 
                className="px-4 py-2 bg-blue-500 text-sm text-white rounded shadow-md hover:bg-blue-600 transition"
                onClick={""}
                >
                  Change Number
                </button>
              ) : (
                <button 
                className="px-4 py-2 bg-blue-500 text-sm text-white rounded shadow-md hover:bg-blue-600 transition"
                onClick={handlePhoneChangeSection}
                >
                  Add Number
                </button>
              )}

              {/* New phone number? Change number */}
              {/* Send an SMS to verify your phone number. (Helps ensure you can receive messages from Steam)Verify number*/}
              {/* Remove your phone number from your account. This will reduce your level of Steam account security.Remove number */}
            </div>
            <div className='flex flex-col gap-2 '>
            <div className="bg-[#1a5276] p-4 rounded text-gray-200">
            <h3 className="text-lg">How It Works:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Don’t have a number connected?</span>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Click on the "Add Number" button.</li>
                  <li>Enter your new phone number.</li>
                  <li>Submit.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">Already have a number connected?</span>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Click on the "Change Number" button.</li>
                  <li>Enter your new phone number.</li>
                  <li>Click "Submit" to receive a confirmation code on your previous phone number.</li>
                  <li>Enter the code in the verification section.</li>
                </ul>
              </li>
            </ul>

            </div>
              {isChangeingPhone? (
                <div className='flex gap-4 flex-col my-5 bg-[#103d5c] rounded ' >
                  <label> Enter New phone number </label>
                  {/* Nation Phone Number Prefix */}
                  <div className='flex gap-1 '> 
                    <input
                     type="tel"
                     className={"border-2 border-gray-400 bg-[#1E293B] text-white rounded-lg px-2 py-2 "  + focusAnimation}
                     value={phonePrefix}
                     onChange={(e)=>{
                      const value = e.target.value
                      if (/^\+?\d*$/.test(value)) {
                        setPhonePrefix(value);
                      }
                    }}
                     placeholder='Example: +995'
                     maxLength={5}
                     />
                    <input 
                      className={'border-2 border-black bg-[#243642] rounded p-2 text-white w-full '}
                      value={newPhoneNumber}
                      onChange={(e)=>{
                        const value = e.target.value
                        if (/^\+?\d*$/.test(value)) {
                          setNewPhoneNumber(value);
                        } 
                      }}
                      placeholder='New Phone Number'
                    />
                  </div>
                </div>) : ""} 
            </div>
            {verifySection?
            <div className="flex flex-col gap-2 border-2 border-gray-500 rounded p-4 bg-[#1a2b3c] text-white space-y-3 
            transition-all duration-500 ease-in-out transform opacity-100 scale-100">
            <div className="flex justify-between items-center gap-2 ">
              <p className="text-gray-300 text-sm md:text-md">
                A verification code has been sent to your number.
              </p>
              <button className="text-red-500 rounded-full p-2 hover:texst-red-800 scale-150 hover:scale-125 transition-all duration-200 ease-in-out"
                onClick={closeVerificationSection}
              >
                <i className="fa-solid fa-xmark"></i>
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
              onClick={verifyNumberWithCode}
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
            <button 
           className={
            'rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 ' +
            (verifySection ? 'cursor-not-allowed opacity-50 ' : ' ') +
            (!phonePrefix || !newPhoneNumber ? 'cursor-not-allowed ' : '')
          }
            onClick={handleSubmit}
            disabled={!phonePrefix || !newPhoneNumber}
            > Submit </button>
          </div>
          </div>
      </div>
    )
  }
  