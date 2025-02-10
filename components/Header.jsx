'use client'
import React from 'react';
import NavElement from './NavElement';
import { Lobster, Open_Sans, Pacifico, Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';
import ArtScapeLogo from './ArtScapeLogo';
import AuthenticationForm from "@/components/AuthenticationForm";
import { useAuth } from '@/context/AuthContext';
import ThemeModeButton from './ThemeModeButton';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] })

export default function Header() {

const { isAuthenticated, setIsAuthenticated, currentUser, logout, isLoading } = useAuth()
const [authenticatingActive, setAuthenticatingActive] = useState(false)
const [accountNav, setAccountNav] = useState(false)

function accountManegementDiv(){
  setAccountNav(!accountNav)
}

// function logOutHandle() {
//   // setIsAuthenticated(false)
  
//   console.log("Logged Out")
// }

useEffect(() => {
  {authenticatingActive ? (
    document.body.style.overflow = 'hidden'
  ) : (
    document.body.style.overflow = 'auto') }

    //to ensure its cleaned up 
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [authenticatingActive])

  
  return (
    <>
      {authenticatingActive? <AuthenticationForm setAuthenticatingActive={setAuthenticatingActive} /> : null}
      <header className="py-2 px-6 border-0 border-b-2  w-full flex justify-between h-[70px]">
        <ArtScapeLogo linkTag />
        
        <nav className='flex p-2 gap-2 justify-evenly  min-w-[500px]'>
          <NavElement title="Gallery" link="/gallery" />  
          <NavElement title="Support" link="/support" />  
          <NavElement title="Explore" link="/explore" icon={<i className="fa-regular fa-compass explore-icon "></i>} />  
        </nav>
          {isAuthenticated? (
            <div className='flex flex-col right-[10px] pt-1 rounded'> 
              <div className={`flex items-center gap-4 px-2 `}>
                <p className={`truncate ` + poppins.className }>
                  {currentUser ? (
                  currentUser.email.length > 12 ? currentUser.email.slice(0, 12) + "..." : currentUser.email) 
                  : (null)}
                </p>
                  <button className="flex flex-col" onClick={accountManegementDiv}> 
                    <div className=" p-0 w-12 h-12 overflow-hidden rounded-full ">
                      <img
                        className="w-full h-full object-cover"
                        src="/ProfilePicDemo.jpg"
                        alt="Profile Picture Animation"
                      />
                    </div>
                  </button>
              </div>
              {accountNav? (<div className="border-2 border-t-0 bg-white flex flex-col z-10 pt-4 gap-2 py-2 px-1 rounded  rounded-tl-none rounded-tr-none text-black ">

                <ThemeModeButton />
                <NavElement title="My Profile" link={`/profile`} profileType />
                <NavElement title="Upload Your Work" link={`/upload`} profileType />
                <NavElement title="Account Manegement" link={`/accountmanegement`} profileType />
                <button className="management-nav-button p-1" onClick={logout}>Log Out </button>
              </div>) : (null)}
            </div>) : (
            <button className='border border-black my-2 px-2 rounded-lg hover:scale-105 hover:bg-indigo-400 hover:border-none hover:text-white ' onClick={() => {
              setAuthenticatingActive(true)
            }}>
              Sign in <i className="fa-solid fa-palette titleGradientPurple"></i>
            </button>
          )}
      </header>
    </>
  );
}
