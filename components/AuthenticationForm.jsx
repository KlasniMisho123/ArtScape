import React from 'react'

export default function AuthenticationForm() {
  return (
    <button className='w-[100%] h-full bg-[rgba(255,255,255,0.5)] flex justify-center absolute z-50 flex justify-center '>
      <div className='bg-red-200 p-[70px] flex flex-col gap-4 justify-center mt-[80px]'>
        <h2>Login to website</h2> 
        <input placeholder='username'/>
        <input placeholder='password'/>
        <button> Log in </button>
      </div>
    </button>
  )
}

