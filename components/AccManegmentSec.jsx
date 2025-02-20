import React from 'react'

export default function AccManegmentSec(props) {
  const {currentEditSec} = props
  return (
    <div className='flex flex-col w-[100%] bg-red-500 '>
      <div className='flex justify-center font-bold md:text-xl sm:text-sm '> {currentEditSec} </div>
      <div className='flex flex-col justify-between mt-[60px]'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </div>
    </div>
  )
}
