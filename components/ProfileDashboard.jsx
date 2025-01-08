import React from 'react'

export default function ProfileDashboard() {
  return (
    <div className='flex mt-[30px] w-[80%] mx-auto gap-[300px]'>
        <div className='flex flex-col '>
            <button className="flex flex-col bg-red-500 overflow-hidden rounded-full border-2 border-gray-600  h-300 w-300 "> 
                    <img
                    className="object-cover"
                    src="/ProfilePicDemo.jpg"
                    alt="Profile Picture Animation"
                    height={250}
                    width={250}
                    />
            </button>
            <div className='flex flex-col items-center mt-4 gap-4 '>
                <h3 className=''>KLASNIMISHO123</h3>
                <button className='border py-1 w-full rounded bg-gray-100 '> Edit Profile </button>
            </div>
        </div>
        <div className='flex flex-col border border-black'>
            <div>Dashboard 1</div>
            <div>Dashboard 2</div>
        </div>
    </div>
  )
}
