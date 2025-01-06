import React from 'react'
import sunPng from "../public/sun.png"
import Image from "next/image";

export default function ThemeModeButton(props) {
  const { isLightMode, setIsLightMode } = props

  function handleThmeChange() {
    console.log("isLightMode: ", isLightMode)
    setIsLightMode(!isLightMode)
  }
  
  return (
    <div className='flex flex-row justify-center'>
      {/* flex-row-reverse ---> animation */}
      <button onClick={handleThmeChange} className={`flex justify-between items-center border-2 w-auto rounded-2xl px-2 py-1  w-[50%] ` + (isLightMode?`border-gray bg-white `: `border-gray-100 bg-gray-400 flex-row-reverse `)}>
          <div>
            <Image src={sunPng} alt="sun" width={25} height={25} />
          </div>
          <i className={"fa-regular fa-circle " + " text-2xl text-[#FFB72B] bg-[#FFD93D] rounded-2xl "}></i>
      </button>
    </div>
  )
}
