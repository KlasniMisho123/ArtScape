"use client"
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'

export default function AccountDetailsEdit() {
  const {currentUser, isLightMode} = useAuth()

  useEffect(()=>{
    // console.log(currentUser)
  },[])

  return (
    <div className=''>
      <div>
      <input
      placeholder='Social Links'
      />
      <input
      placeholder='Desc'
      />
      </div>
      <section className='flex flex-col gap-4 shadow-2xl  '>
        <div className='text-lg font-bold bg-[#134B70] text-white px-2 py-1 '> Contact Info <i className="fa-solid fa-envelope"></i> </div>
        <div className="flex gap-[30%] p-2 mx-2 pb-8 "> 
          <div>
          <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white"> 
            Change <i className="fa-solid fa-envelope"></i> </button>
            <p className='my-1'> <span className='text-gray-500'> Email address: </span>{currentUser?.email || ""} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.emailVerified ? `Verified` : "Unverified"} </p>
          </div>
          <div>
            <button className="p-1 border border-black my-1 px-4 rounded transition-all duration-300 hover:bg-black hover:text-white"> 
              Change <i className="fa-solid fa-mobile  "> </i> </button>
            <p className='my-1'> <span className='text-gray-500'> Phone: </span> <i className="fa-solid fa-mobile mx-1 "></i> {currentUser?.phoneNumber
             ? `Ends in: ${currentUser.phone}` : "Empty"} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.mbverify ? `Verified` : "Unverified"} </p>
          </div>
        </div>
      </section>
      <div className='flex justify-end gap-16 ml-[10px] mt-[40px]'>
          <button
           className='rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 '
          > Cancel</button>
          <button className='rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '> Save</button>
        </div>
    </div>
  )
}
