import React from 'react'

export default function AuthenticationForm(props) {

  const  { setAuthenticatingActive, authenticatingActive  } = props

  return (
    <div className='absolute z-50 w-[100%] h-full'>
        <button className='w-[100%] h-full bg-[rgba(255,255,255,0.5)] flex justify-center absolute z-5 flex justify-center '
        onClick={() => {setAuthenticatingActive(false)}} />

        <div className='bg-red-200 p-[70px] w-fit mt-[80px] mx-auto relative z-5 flex flex-col gap-4 justify-center '>
            <h2>Login to website</h2>
            <input placeholder='username' className='p-2 border rounded' />
            <input placeholder='password' className='p-2 border rounded' />
            <button className='bg-blue-500 text-white py-2 px-4 rounded'>
              Log in
            </button>
        </div>
    </div>
  )
}

