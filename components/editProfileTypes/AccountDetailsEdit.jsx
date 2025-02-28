"use client"
import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function AccountDetailsEdit() {
  const {currentUser} = useAuth()
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
        <p> <span className='text-gray-500'> Email address: </span>{currentUser?.email || ""} </p> 
        <p> <span className='text-gray-500'><i className="fa-solid fa-mobile"></i>  Phone: </span> {currentUser.phone ? `Ends in: ${currentUser.phone}` : "None"} </p> 
      </section>
      {/* pluss sign */}
    </div>
  )
}
