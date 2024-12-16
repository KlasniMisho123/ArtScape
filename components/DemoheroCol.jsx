import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster } from 'next/font/google';

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
                <div className='bg-gray-100 h-[500px] w-[300px] rounded-[30px] overflow-hidden relative '>
                    <img src='ProfilePicDemo.gif' className='absolute insert-0 h-full w-full object-cover '/>
                    <div className="relative z-10 text-white p-4 flex flex-col items-center pt-6 ">
                        <div> Modern Art </div>
                        <button className='flex '> <div>{'>'}</div> View Collection </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-6 [&>div]:bg-gray-100 [&>div]:h-[200px] [&>div]:w-[350px]'>
                    <div> GridItem1 </div>
                    <div> GridItem2 </div>
                    <div> GridItem3 </div>
                    <div> GridItem4 </div>
                </div>
            </div>
        </div>
    </>
  )
}
