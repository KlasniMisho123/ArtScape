'use client'
import React, { useState } from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  const [currentEditSec, setCurrentEditSec] = useState("general")

  return (
    <div className='flex flex-col h-[100vh] w-[90%] mx-auto my-[5%] '>
        <div className='flex gap-10'>
        <div className='flex flex-col gap-4 p-2 bg-gray-800 text-white '>
          <section className='accManegementBar' onClick={()=>{
            setCurrentEditSec("General")
          }}> General</section>
          <section className='accManegementBar' onClick={()=>{
            setCurrentEditSec("Account Details")
          }}> Account Details</section>
          <section className='accManegementBar' onClick={()=>{
            setCurrentEditSec("Avatar Edit")
          }}> Avatar Edit </section>
          <section className='accManegementBar' onClick={()=>{
            setCurrentEditSec("Mini Profile")
          }}> Mini Profile </section>
        </div>
        {currentEditSec}
            <AccManegmentSec />
        </div>
    </div>
  )
}
