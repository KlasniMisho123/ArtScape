import React from 'react'
import sunPng from "../public/sun.png"
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';

export default function ThemeModeButton() {
  const {  isLightMode, setIsLightMode } = useAuth()
{/* set dark mode theme */}
function handleThmeChange() {
  setIsLightMode(!isLightMode);
  localStorage.setItem("theme", !isLightMode ? "light" : "dark");
}
  
  return (
    <div className='flex flex-row justify-center h-[36.2px] overflow-hidden '>
      <button onClick={handleThmeChange} className={`flex justify-between items-center border-2 w-auto rounded-2xl px-2 py-1 w-[100px] gap-[30px] ` + (isLightMode?`border-gray bg-white `: `border-gray-100 bg-gray-700 `)}>
        <div className={isLightMode?`sun-div`:`moon-div`}>
          {isLightMode?(
            <Image src={sunPng} alt="sun" width={25} height={25} className='sun-icon'/>
          ):(
            <i className="fa-solid fa-moon text-[24px] text-white moon-icon"></i>
          )}
        </div>
          <i className={`fa-regular fa-circle text-2xl  rounded-2xl ` + (isLightMode?` text-[#FFB72B] bg-[#FFD93D] sun-circle `:`text-white bg-gray-600 moon-circle `)}></i>
      </button>
    </div>
  )
}
