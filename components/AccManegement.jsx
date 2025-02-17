import React from 'react'
import AccManSideNav from './AccManSideNav'

export default function AccManegement() {
  return (
    <div className='bg-red-400 flex flex-col h-[100vh]'>
        <div className='bg-green-400 flex'>
            <AccManSideNav />
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
  )
}
