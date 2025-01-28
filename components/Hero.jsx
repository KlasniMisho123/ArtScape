'use client'
import React, { useState } from 'react'
import DemoheroCol from "@/components/DemoheroCol";

export default function Hero() {
  return (
    <>
        <div className='flex bg-[#020006] text-white h-[600px] w-full overflow-hidden '>
          {/* <div className='absolute z-1 w-full h-[600px] '>
            <img className='w-full h-full' src='https://media.assettype.com/afkgaming/import/media/images/94087-QoP%20Brother%20Cover.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max'/>
          </div> */}
            <div className='flex left-intro-div '>
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
