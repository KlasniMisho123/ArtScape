import { Poppins } from 'next/font/google';
import React, { useState } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });


export default function AuthenticationForm(props) {
  const  { setAuthenticatingActive } = props

  const [isRegistered, setIsRegistered ] = useState(true)

  function HandleAuthType() {
    console.log("isRegistered: ", isRegistered)
    setIsRegistered(!isRegistered)
  }


  return (
    <div className='absolute z-50 w-[100%] h-full'>
        <button className='w-full h-[150%] bg-gray-900 bg-opacity-60 flex justify-center absolute z-5 flex justify-center'
        onClick={() => {setAuthenticatingActive(false)}} />

        <div className='bg-white p-[60px] px-[80px] mt-[5%] w-fit mx-auto relative z-5 flex flex-col gap-[40px] rounded-[25px]'>
            <h2 className={'text-[32px] weight-bolder ' + poppins.className}>{isRegistered ? "Access Your Account" : "Register To Our Platform"}</h2>
            <div className='flex flex-col gap-4 '>
              <input
                placeholder='Username'
                className='p-2 border rounded-xl outline-none' />
              <input
                placeholder='Password'
                className='p-2 border rounded-xl outline-none'
                type='password' />
              <button className='bg-blue-400 text-white py-2 px-4 rounded-lg hover:opacity-90'>
                Log in
              </button>
              <p>Don’t have an account? <button onClick={HandleAuthType} className="text-blue-500" >Sign up</button></p>
            </div>
        </div>
    </div>
  )
}

