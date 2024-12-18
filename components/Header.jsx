'use client'
import React from 'react';
import NavElement from './NavElement';
import { Lobster, Pacifico, Poppins } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import ArtScapeLogo from './ArtScapeLogo';
import AuthenticationForm from "@/components/AuthenticationForm";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

export default function Header() {

const [isAuthenticated, setIsAuthenticated ] = useState(false)

const [authenticatingActive, setAuthenticatingActive] = useState(false)

  return (
    <>
      {authenticatingActive? <AuthenticationForm setAuthenticatingActive={setAuthenticatingActive} /> : null}
      <header className="py-2 px-6 border w-full flex justify-between ">
        <ArtScapeLogo linkTag={1}/>
        
        <nav className='flex p-2 gap-2 justify-evenly  min-w-[500px]'>
          <NavElement title="Gallery" link="/gallery" />  
          <NavElement title="Support" link="/support" />  
          <NavElement title="Explore" link="/explore" icon={<i className="fa-regular fa-compass explore-icon "></i>} />  
        </nav>
          {isAuthenticated? (<div className=" p-0 w-12 h-12 overflow-hidden rounded-full">
            <img
            className='w-full h-full object-cover' 
            src='ProfilePicDemo.jpg'
            alt='Profile Picture Animation' />
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
