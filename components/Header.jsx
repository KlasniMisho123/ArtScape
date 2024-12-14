'use client'
import React from 'react';
import NavElement from './NavElement';
import { Lobster, Pacifico, Poppins } from 'next/font/google';
import { useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

export default function Header() {

const [isAuthenticated, setIsAuthenticated ] = useState(false)

  return (
    <header className="py-2 px-6 border w-full flex justify-between ">
      <div className='flex row'>
        <img src='/artScapeLogo.png' className='h-[50px]'/>
        <h3 className='text-[30px]'> <span className={'titleGradientPurple ' + pacifico.className}>Art</span><span className={'text-indigo-500 titleGradientRed ' + poppins.className}>Scape</span> </h3>
      </div>
      
      <nav className='flex p-2 gap-2 justify-evenly  min-w-[500px]'>
        <NavElement title="Gallery" link="/gallery" />  
        <NavElement title="Support" link="/Support" />  
        <NavElement title="Explore" link="/Explore" icon={<i className="fa-regular fa-compass"></i>} />  
      </nav>
        {isAuthenticated? (<div className=" p-0 w-12 h-12 overflow-hidden rounded-full">
          <img
          className='w-full h-full object-cover' 
          src='ProfilePicDemo.jpg'
          alt='Profile Picture Animation' />
        </div>) : (
          <button className='border border-black my-2 px-2 rounded-lg hover:scale-105 hover:bg-indigo-400 hover:border-none hover:text-white '>
            Sign in <i className="fa-solid fa-palette titleGradientPurple"></i>
          </button>
        )}
    </header>
  );
}
