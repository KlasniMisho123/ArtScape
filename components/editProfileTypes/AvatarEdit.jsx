import React, { useState } from 'react'

export default function AvatarEdit() {
  const [avatar, setAvatar] = useState("")
  return (
    <div className='min-h-[100vh] flex flex-col gap-8 '>
      <div className='flex flex-col ml-2 gap-2 '> 
        <h3 className='font-bold text-white text-xl '> Express Yourself </h3>
        <p className='opacity-75 '>  Change Your Avatar</p>
      </div>
      <section className='flex justify-between'>
        <div className='flex gap-12 items-end '>
          <img src='defaultProfilePicture.jpg' className='h-64 w-64'/>
          <img src='defaultProfilePicture.jpg' className='h-32 w-32'/>
          <img src='defaultProfilePicture.jpg' className='h-16 w-16'/>
        </div>
      <div className='flex flex-col'>
        <input
        type='file'
        />
        <p>ss</p>
      </div>
      </section>
      
      {avatar}
    </div>
  )
}
