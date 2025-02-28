"use client"
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'

export default function AccountDetailsEdit() {
  const {currentUser} = useAuth()

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
            <button className='p-1 border border-black my-1 p-1 rounded '> Change <i className="fa-solid fa-envelope"></i> </button>
            <p className='my-1'> <span className='text-gray-500'> Email address: </span>{currentUser?.email || ""} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.emailVerified ? `Verified` : "Unverified"} </p>
          </div>
          <div>
            <button className='p-1 border border-black my-1 p-1 rounded '> Change <i className="fa-solid fa-mobile  "> </i> </button>
            <p className='my-1'> <span className='text-gray-500'> Phone: </span> <i className="fa-solid fa-mobile mx-1 "></i> {currentUser?.phoneNumber
             ? `Ends in: ${currentUser.phone}` : "Empty"} </p> 
            <p> <span className='text-gray-500'> Status: </span> {currentUser?.mbverify ? `Verified` : "Unverified"} </p>
          </div>
        </div>
      </section>
      {/* pluss sign */}
    </div>
  )
}
