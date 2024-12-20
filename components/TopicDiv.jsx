import React from 'react'

export default function TopicDiv(props) {
    const { title } = props
  return (
    <div className='bg-white mt-[70px] mb-[30px] w-full-auto flex '>
        <div className='flex items-center gap-4 w-full justify-center '>
            <div className='border border-gray-500 h-0 w-[20%] '/> <div className='bg-indigo-500 px-6 py-[5px] rounded-3xl text-white text-lg sm:text-sm md:text-md lg:text-lg '> {title} </div> <div className='border border-gray-500 h-0 w-[20%] '/>
        </div>
    </div>
  )
}
