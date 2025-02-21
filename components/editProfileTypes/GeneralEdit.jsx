import { useAuth } from '@/context/AuthContext';
import React from 'react'

export default function GeneralEdit() {
  const { isLightMode } = useAuth();
  return (
    <div className='flex flex-col gap-4 justify-center pl-[20px]'>
      <h3 className='font-bold text-lg '> About </h3>
      <p className='text-gray-400'>Set your profile name and details.Providing additional informations 
        like real name can help <br/> friends to find you on the ArtScape Community.</p>
        <section>
        <h3 className=' text-lg pb-2'>General</h3>
        <hr className='opacity-75'/>
        </section>
        <div className='flex flex-col p-4 gap-2 '>
          <label> Profile Name</label>
          <input 
          className='border-black bg-[#243642] rounded p-2 text-white'
          placeholder='rad'
          />
          <label> Real Name <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question " + (isLightMode? "text-black" : "text-white")}></i></label>
          <input 
          className='border-black bg-[#243642] rounded p-2 text-white'
          placeholder='sad'
          />
        </div>
    </div>
  )
}
