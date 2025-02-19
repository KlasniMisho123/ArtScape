import React from 'react'
import AccManegmentSec from './AccManegmentSec'

export default function AccManegement() {
  return (
    <div className='flex flex-col h-[100vh] w-[90%] mx-auto my-[5%] '>
        <div className='flex'>
        <div>AccManSideNav</div>
            <AccManegmentSec />
        </div>
    </div>
  )
}
