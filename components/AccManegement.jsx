'use client'
import React, { useState } from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  const [currentEditSec, setCurrentEditSec] = useState("General")

  return (
    <div className='flex flex-col h-[100vh] w-[90%] mx-auto my-[5%] '>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2 py-2 px-1 bg-[#1E3E62] text-white h-fit'>
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
            <AccManegmentSec currentEditSec={currentEditSec} />
        </div>
    </div>
  )
}
