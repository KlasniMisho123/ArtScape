'use client'
import React, { useEffect, useState } from 'react'
import AccManegmentSec from './AccManegmentSec'
import { useAuth } from '@/context/AuthContext'

export default function AccManegement() {
  const [currentEditSec, setCurrentEditSec] = useState()

  const { isLightMode } = useAuth();

  function handleEditSecChange(selectedSec) {
     setCurrentEditSec(selectedSec)

     localStorage.setItem("editSection", selectedSec)
  }

  useEffect(()=> {
    const currentSec = localStorage.getItem("editSection")
    if(currentSec){
      setCurrentEditSec(currentSec)
    } else {
      setCurrentEditSec("General")
    }
  },[currentEditSec])

  return (
    <div className={'flex flex-col w-[80%] mx-auto my-[3%] p-[2%] rounded shadow-lg ' + (isLightMode? "bg-gray-200 " : "bg-gray-800")}>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 py-2 px-1 bg-[#134B70] text-white h-fit'>
            <section className={'accManegementBar ' + (currentEditSec === "General"? "activeAccManegementBar" : "")} onClick={()=>{
              handleEditSecChange("General")
            }}> General</section>
            <section className={'accManegementBar ' + (currentEditSec === "Account Details"? "activeAccManegementBar" : "")} onClick={()=>{
              handleEditSecChange("Account Details")
            }}> Account Details</section>
            <section className={'accManegementBar ' + (currentEditSec === "Avatar"? "activeAccManegementBar" : "")} onClick={()=>{
              handleEditSecChange("Avatar")
            }}> Avatar</section>
        </div>
            <AccManegmentSec currentEditSec={currentEditSec} />
        </div>
    </div>
  )
}
