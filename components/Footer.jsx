import React from 'react'
import ArtScapeLogo from './ArtScapeLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex flex-col p-3 pb-1 bg-gray-900 text-white gap-1 '>
      <div className='flex items-center justify-between '> 
        <div className='flex items-center justify-between gap-10 '>
          <ArtScapeLogo />
          <div className='flex justify-between gap-8 text-lg '>
            <Link href={"/Pricing"}> Pricing </Link>
            <Link href={"/Resources"}> Resources </Link>
            <Link href={"/About"}> About </Link>
            <Link href={"/Carrers"}> Carrers </Link>
            <Link href={"/Contact"}> Contact </Link>
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <div className="fab fa-instagram text-2xl text-white hover:text-orange-500 transition-colors duration-200 hover:cursor-pointer "></div>
          <div className='text-md'>ArtScapeInfo@gmail.com</div>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4 pb-2'>
        <p className="text-center text-gray-500 text-sm mt-4">
          &copy; 2025 ArtScape. All rights reserved.
        </p>
        <div className='flex items-center gap-4 text-gray-500 text-sm mt-4'>
          <p>Privacy Policy</p>
          <div>Terms of Services</div>
        </div>
      </div>
    </footer>
  )
}
