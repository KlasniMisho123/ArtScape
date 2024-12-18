'use client'
import React, { useState } from 'react'
import AuthenticationForm from "@/components/AuthenticationForm";
import DemoheroCol from "@/components/DemoheroCol";

export default function Hero() {

  const [authenticatingActive, setAuthenticatingActive] = useState(true)

  return (
    <>
      {authenticatingActive? <AuthenticationForm /> : null}
        <div className='flex bg-gray-900 text-white h-[600px] w-full overflow-hidden '>
            <div className='flex left-intro-div'>
              <img className="h-[200px] w-[200px] object-cover left one" src='introArt/Guernica.png'/>
              <img className="h-[200px] w-[200px] object-cover left two" src='introArt/Mona-Lisa.png'/>
              <img className="h-[200px] w-[200px] object-cover left three" src='introArt/The Kiss.png'/>
              <img className="h-[200px] w-[200px] object-cover left four" src='introArt/The Last Suppe.png'/>
            </div>
            <div className='flex right-intro-div'>
              <img className="h-[200px] w-[200px] object-cover right one " src='introArt/Van-Gogh-Starry-Night.png'/>
              <img className="h-[200px] w-[200px] object-cover right two" src='introArt/The Night Watch (Nachtwacht).png'/>
              <img className="h-[200px] w-[200px] object-cover right three" src='introArt/The Persistence.png'/>
              <img className="h-[200px] w-[200px] object-cover right four" src='introArt/The Scream.png'/>
            </div>
        </div>
        <DemoheroCol />
      </>
        
  )
}
