import React from 'react'
import AccManSideNav from './AccManSideNav'

export default function AccManegement() {
  return (
    <div className='flex flex-col h-[100vh]'>
        <div className='flex'>
            <AccManSideNav />
            <div className='flex justify-between mt-[60px]'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    </div>
  )
}
