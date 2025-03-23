'use client'
import { useAuth } from '@/context/AuthContext'
import axios from "axios";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../firebase"; 
import React, { useEffect, useState } from 'react'
import StatusMessage from '../StatusMessage';

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
    const [inputedVerCode, setInputedVerCode] = useState("")
    const [userCurrentPhoneNumber, setUserCurrentPhoneNumber] = useState("")
    const [successMessage, setSuccessMessage] = useState(false)
    const focusAnimation = ` focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300 transition duration-300 ease-in-out`

    async function handleUserInfo() {
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const getUserInfo = await getDoc(userRef);
        const currentUserNumber = getUserInfo.data()?.phoneNumber;

        setUserCurrentPhoneNumber(currentUserNumber);
        hashingPhoneNumber(currentUserNumber);

        setUserEmail(currentUser?.email);
      } catch (err) {
        console.log("handleUserInfo Error: ", err.message);
      }
    }

      function hashingPhoneNumber(currentUserNumber) {
        if (currentUserNumber) {
          let phonenumberLength = currentUserNumber.length;
          let lastTwonumber = currentUserNumber.slice((phonenumberLength-2), phonenumberLength);
          setHashedPhoneNumber(lastTwonumber);
        } else {
          console.log("empty");
        }
      }
    

    function closeVerificationSection() {
      setVerificationCode("")
      setGeneratedVerificationCode("")
      setVerifySection(false)
      setSuccessMessage(false)
    }

    function clearInputs() {
      setNewPhoneNumber("")
      setPhonePrefix("")
      setInputedVerCode("")
    }

    async function generateVerificationCode() {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedVerificationCode(code);
      return code;
    }

    async function handleSubmit() {
      const verificationCode = await generateVerificationCode()

      if(!phonePrefix) {
        console.log("Phone Prefix Number Required!")
        return
      }
      if(!newPhoneNumber) {
        return console.log("Phone Number Required!")
      }

      try {
        sendPhoneVerification(phonePrefix, newPhoneNumber, userEmail, verificationCode)
        setVerifySection(true)
      } catch(err) {
        console.log("❌ Error adding new phone number:", err.message);
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
      setIsChangeingPhone(!isChangeingPhone)
    }

    async function verifyNumberWithCode() {
      // Check if Code that u sent matches input Code
      if (inputedVerCode === generatedVerificationCode) {
        try {
          let fullNumber = null;

          if (phonePrefix && newPhoneNumber) {
            fullNumber = phonePrefix + newPhoneNumber;
          }
          
          await setUserPhoneNumber(fullNumber);
          clearInputs()
          setIsChangeingPhone(false)
          setVerifySection(false)
          setTimeout(() => {
            setSuccessMessage(false)
          }, 2500);

        } catch(err) {
          console.log(err.message)
        }
      }
    }

    useEffect(()=>{
      console.log("currentUser: ", currentUser)
      if(currentUser) {
        handleUserInfo()
      }
    },[currentUser])

    return (
      <div className='min-h-[75vh] w-[70%] mx-auto text-white'>        
          <div className='flex items-center gap-2 bg-[#134B70] mt-2 p-4 text-white  md:text-sm lg:text-md rounded '>
              <i className="fa-solid fa-mobile-screen md:text-md lg:text-lg mr-1"></i>
              {/* <span className='cursor-pointer'> Home &gt; Account &gt; Email Preferences </span> */}
              <h1 className='text-white sm:text-md  md:text-lg lg:text-xl '> Phone Number Configuration: </h1>
          </div>
          <div className='flex gap-4 flex-col my-10 bg-[#103d5c] rounded p-4 '> 
            <div> 
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
                  <li>Click "Submit" to receive a confirmation code on new Email.</li>
                  <li>Verification code will be sent to your current email</li>
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
              <div> 
                <h2 className='flex items-center gap-2 md:text-md lg:text-lg'>
                    Associated phone number: <span> <p className='my-2'> 
                    <i className="fa-solid fa-mobile mx-1 "></i> {userCurrentPhoneNumber? `Ends with: ${hashedPhoneNumber}` : "Empty"} </p>  </span>
                  </h2>

                  {userCurrentPhoneNumber ? (
                    <button 
                    className="px-4 py-2 bg-blue-500 text-sm text-white rounded shadow-md hover:bg-blue-600 transition"
                    onClick={handlePhoneChangeSection}>
                      Change Number
                    </button>
                  ) : (
                    <button 
                    className="px-4 py-2 bg-blue-500 text-sm text-white rounded shadow-md hover:bg-blue-600 transition"
                    onClick={handlePhoneChangeSection}>
                      Add Number
                    </button>
                  )}
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
                     disabled={verifySection}
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
                      disabled={verifySection}
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
                A verification code has been sent to your number. {generatedVerificationCode}
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
              value={inputedVerCode}
              onChange={(e) => setInputedVerCode(e.target.value)}
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
            <div className='flex justify-center mt-[20px] h-2 '>{successMessage?   (<StatusMessage status={200} section={"Email"}/> ) : ""} </div>
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
  