import React from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  return (
    <div className='flex flex-col h-[100vh] w-[90%] mx-auto my-[5%] p-4 bg-opacity-10 bg-gray-800 '>
        <div className='flex'>
        <div className='flex flex-col' >
          <section> Account Details</section>
          <section> Profile Edit </section>
        </div>
            <AccManegmentSec />
        </div>
    </div>
  )
}
