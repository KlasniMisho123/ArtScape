import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });


export default function AuthenticationForm(props) {
  const  { setAuthenticatingActive } = props


  return (
    <div className='absolute z-50 w-[100%] h-full'>
        <button className='w-full h-[150%] bg-gray-900 bg-opacity-60 flex justify-center absolute z-5 flex justify-center'
        onClick={() => {setAuthenticatingActive(false)}} />

        <div className='bg-white p-[60px] px-[80px] mt-[5%] w-fit mx-auto relative z-5 flex flex-col gap-[40px] rounded-[25px]'>
            <h2 className={'text-[32px] weight-bolder ' + poppins.className}>Login to website</h2>
            <div className='flex flex-col gap-4 '>
              <input placeholder='username' className='p-2 border rounded-xl' />
              <input placeholder='password' className='p-2 border rounded-xl' />
              <button className='bg-blue-500 text-white py-2 px-4 rounded'>
                Log in
              </button>
            </div>
        </div>
    </div>
  )
}

