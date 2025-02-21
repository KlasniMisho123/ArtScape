import { useAuth } from '@/context/AuthContext';
import React from 'react'

export default function GeneralEdit() {
  const { isLightMode } = useAuth();
  return (
    <div className='flex flex-col gap-4 justify-center pl-[20px]'>
      <h3 className='font-bold text-lg '> About </h3>
      <p className='opacity-75'>Set your profile name and details.Providing additional informations 
        like real name can help <br/> friends to find you on the ArtScape Community.</p>
        <section>
          <h3 className=' text-lg pb-2'>General</h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />
          
          <div className='flex flex-col p-4 gap-4 '>
            <label> Profile Name</label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            placeholder=''
            />
            <label> Real Name <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i></label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            placeholder=''
            />
          </div>
        </section>
        <section>
          <h3 className=' text-lg pb-2'>Location <i title="Including your location will help ensure accurate shipping to avoid delays or errors." className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i> </h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />

          <div className='flex flex-col p-4 gap-4 '>
            <label> Country </label>
            <select className='border-2 border-black bg-[#243642] rounded p-2 text-white'>
              <option>Georgia</option>
              <option>UK</option>
              <option>Germany</option>
            </select>

            <label> City </label>
            <select className='border-2 border-black bg-[#243642] rounded p-2 text-white'> 
              <option>Tbilisi</option>
              <option>Rustavi</option>
              <option>Soxumi</option>
            </select>
           </div>
        </section>
        <section>
          <h3 className='text-lg pb-2'> Summary </h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />
          <div className='flex flex-col p-4 gap-4 '>
          <textarea 
            className="border-2 border-black bg-[#243642] rounded p-2 text-white max-h-[200px] min-h-[70px] overflow-y-hidden"
          />
          </div>
        </section>
        <div className='flex justify-end gap-16 ml-[10px] mt-[40px]'>
          <button className='rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 '> Cancel</button>
          <button className='rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '> Save</button>
        </div>
    </div>
  )
}
