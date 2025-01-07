import React from 'react'
import sunPng from "../public/sun.png"
import Image from "next/image";

export default function ThemeModeButton(props) {
  const { isLightMode, setIsLightMode } = props

{/* set dark mode theme */}
  function handleThmeChange() {
    console.log("isLightMode: ", isLightMode)
    setIsLightMode(!isLightMode)
  }
  
  return (
    <div className='flex flex-row justify-center h-[36.2px]'>
      {/* flex-row-reverse ---> animation */}
      <button onClick={handleThmeChange} className={`flex justify-between items-center border-2 w-auto rounded-2xl px-2 py-1  w-[55%] ` + (isLightMode?`border-gray bg-white `: `border-gray-100 bg-gray-700 flex-row-reverse `)}>
          {isLightMode?(
            <Image src={isLightMode?(sunPng):(moonPng)} alt={isLightMode?"sun":"moon"} width={25} height={25} />
          ):(
            <i className="fa-solid fa-moon text-[24px] text-white rotate-[-15deg] "></i>
          )}
          
          <i className={`fa-regular fa-circle text-2xl  rounded-2xl ` + (isLightMode?` text-[#FFB72B] bg-[#FFD93D] `:`text-white bg-gray-700 `)}></i>
      </button>
    </div>
  )
}
