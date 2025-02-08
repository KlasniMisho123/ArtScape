import React from 'react'

export default function Loading() {
  return (
    <div className='flex gap-4 justify-center items-center mt-4'>
      Loading
      <i className="fa-solid text-slate-800 fa-spinner animate-spin text-4xl sm:text-5xl loading-icon"></i>
    </div>
  )
}