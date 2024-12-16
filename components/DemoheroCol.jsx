import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'

export default function DemoheroCol() {
  return (
    <>
        <div className='bg-white mt-[70px] mb-[30px] w-full-auto flex '>
            <div className='flex items-center gap-4 w-full justify-center '>
                <div className='border border-gray-500 h-0 w-[20%] '/> <div className='bg-indigo-500 px-4 py-[5px] rounded-2xl text-white '> Categories </div> <div className='border border-gray-500 h-0 w-[20%] '/>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 '>
            <ArtScapeLogo /> <span> collection </span>
        </div>
    </>
  )
}
