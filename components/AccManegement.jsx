import React from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  return (
    <div className='flex flex-col h-[100vh] w-[90%] mx-auto my-[5%] '>
        <div className='flex gap-10'>
        <div className='flex flex-col gap-4 p-2 bg-gray-800 text-white '>
          <section className='accManegementBar'> General</section>
          <section className='accManegementBar'> Account Details</section>
          <section className='accManegementBar'> Avatar Edit </section>
          <section className='accManegementBar'> Mini Profile </section>
        </div>
            <AccManegmentSec />
        </div>
    </div>
  )
}
