import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster } from 'next/font/google';
import CategoriesCard from './CategoriesCard';

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });

export default function DemoheroCol() {
  return (
    <>
        <div className='bg-white mt-[70px] mb-[30px] w-full-auto flex '>
            <div className='flex items-center gap-4 w-full justify-center '>
                <div className='border border-gray-500 h-0 w-[20%] '/> <div className='bg-indigo-500 px-6 py-[5px] rounded-3xl text-white text-lg sm:text-sm md:text-md lg:text-lg '> Categories </div> <div className='border border-gray-500 h-0 w-[20%] '/>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2 pb-[40px]'>
                <ArtScapeLogo /> <span className={'text-xl ' + lobster.className }> Collections </span>
            </div>
            <div className='flex gap-6 w-full-auto '>
                <CategoriesCard title="Realism Art" link='/' imgSrc="/CategoriesArt/Realism.avif"/>
                <div className='grid grid-cols-2 grid-rows-2 gap-6 [&>div]:h-[100%] [&>div]:w-[400px]'>
                    <CategoriesCard title="Renaissance Art" link='/' imgSrc="/CategoriesArt/Renaissance.avif"/>
                    <CategoriesCard title="Impressionism" link='/' imgSrc="/CategoriesArt/Impressionism.avif"/>
                    <CategoriesCard title="Abstract Art" link='/' imgSrc="/CategoriesArt/Abstract.avif"/>
                    <CategoriesCard title="Pop Art" link='/' imgSrc="/CategoriesArt/Pop.avif"/>
                </div>
            </div>
        </div>
    </>
  )
}
