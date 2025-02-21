'use client'
import React, { useState } from 'react'
import AccManegmentSec from './AccManegmentSec'
import { useAuth } from '@/context/AuthContext'

export default function AccManegement() {
  const [currentEditSec, setCurrentEditSec] = useState("General")
  const { isLightMode } = useAuth();
  return (
    <div className={'flex flex-col h-[100vh] w-[80%] mx-auto my-[3%] p-[2%] rounded ' + (isLightMode? "bg-gray-200" : "bg-gray-800")}>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 py-2 px-1 bg-[#134B70] text-white h-fit'>
            <section className={'accManegementBar ' + (currentEditSec === "General"? "activeAccManegementBar" : "")} onClick={()=>{
              setCurrentEditSec("General")
            }}> General</section>
            <section className={'accManegementBar ' + (currentEditSec === "Account Details"? "activeAccManegementBar" : "")} onClick={()=>{
              setCurrentEditSec("Account Details")
            }}> Account Details</section>
            <section className={'accManegementBar ' + (currentEditSec === "Avatar Edit"? "activeAccManegementBar" : "")} onClick={()=>{
              setCurrentEditSec("Avatar Edit")
            }}> Avatar Edit </section>
            <section className={'accManegementBar ' + (currentEditSec === "Mini Profile"? "activeAccManegementBar" : "")} onClick={()=>{
              setCurrentEditSec("Mini Profile")
            }}> Mini Profile </section>
        </div>
            <AccManegmentSec currentEditSec={currentEditSec} />
        </div>
    </div>
  )
}
