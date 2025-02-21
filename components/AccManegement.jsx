'use client'
import React, { useState } from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  const [currentEditSec, setCurrentEditSec] = useState("General")

  return (
    <div className='flex flex-col h-[100vh] w-[80%] mx-auto my-[3%] bg-gray-200 p-[2%] '>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-4 py-2 px-1 bg-[#1E3E62] text-white h-fit'>
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
