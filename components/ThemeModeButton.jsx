import React, { useEffect } from 'react'
import sunPng from "../public/sun.png"
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';

export default function ThemeModeButton() {
  const {  isLightMode, setIsLightMode } = useAuth()

  function handleThemeChange() {
    const newTheme = !isLightMode;
  
    setIsLightMode(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  
    document.body.classList.toggle("dark-theme", !newTheme);
  }

  useEffect(()=>{

  },[])
  
  return (
    <div className='flex flex-row justify-center h-[36.2px] overflow-hidden '>
      <button onClick={handleThemeChange} className={`flex justify-between items-center border-2 w-auto rounded-2xl px-2 py-1 w-[100px] gap-[30px] ` + (isLightMode?`border-gray bg-white `: `border-gray-100 bg-gray-700 `)}>
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
