"use client"
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import EmailEdit from './EmailEdit'
import Link from 'next/link'

export default function AccountDetailsEdit() {
  const {currentUser, isLightMode} = useAuth()
  const [isF2AuthActive, setIsF2AuthActive] = useState(false)
  

  useEffect(()=> {

  },[])

  return (
    <div className={''}>

      <section className='flex flex-col gap-4 shadow-2xl  '>
        <div className='text-lg font-bold bg-[#134B70] text-white px-2 py-1 '> <i className="fa-solid fa-envelope mr-1"></i> Contact Info  </div>
        <div className="flex gap-[30%] p-2 mx-2 pb-8 "> 
          <div>
          <Link
          href="/accountmanegement/change-email"
          >
      
          <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white">
            Change Email <i className="fa-solid fa-envelope"></i> </button>
            </Link>
            <p className='my-1'> <span className='text-gray-500'> Email address: </span>{currentUser?.email || ""} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.emailVerified ? `Verified` : "Unverified"} </p>
            <button className="p-1 border border-black my-4  px-4 rounded transition-all duration-300 hover:bg-black hover:text-white"> Verify Email </button>
          </div>
          <div>
            <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white"> 
              Change Phone <i className="fa-solid fa-mobile  "> </i> </button>
            <p className='my-1'> <span className='text-gray-500'> Phone: </span> <i className="fa-solid fa-mobile mx-1 "></i> {currentUser?.phoneNumber
             ? `Ends in: ${currentUser.phone}` : "Empty"} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.mbverify ? `Verified` : "Unverified"} </p>
            <button className="p-1 border border-black my-4 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white"> Verify Number </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-4 shadow-2xl mt-14'>
        <div className='text-lg font-bold bg-[#134B70] text-white px-2 py-1 '> <i className="fa-solid fa-shield mr-1"></i> Account Security  </div>
        <div className="flex gap-[10%] p-2 mx-2 pb-8 "> 
          <div>
            <p className='my-1'>  <span className='text-gray-500'> 2FA Status: </span> <span className={' ' + (isF2AuthActive ? "text-green-400" : "text-red-400" )}> {isF2AuthActive ? "Enabled" : "Disabled"}  </span> </p> 
            <div className='flex gap-1 '> 
            <button 
            onClick={()=>{
              setIsF2AuthActive(false)
            }}
            className="p-1 border border-black my-1 text-red-400 px-4 rounded transition-all duration-300 hover:bg-red-500 hover:text-white"> 
            <i className="fa-solid fa-lock"></i> Disable </button>
            <button 
            onClick={()=>{
              setIsF2AuthActive(true)
            }}
            className="p-1 border border-black my-1 px-4 text-green-400 rounded transition-all duration-300 hover:bg-green-500 hover:text-white"> 
            <i className="fa-solid fa-play"></i> Activate </button>
            </div>
            <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white mt-6 ">Change Password </button>
          </div>
          <div>
            <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white">Learn more about ArtScape 2FA </button>
          </div>
        </div>
      </section>
      
    </div>
  )
}
