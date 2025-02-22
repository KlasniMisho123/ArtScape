import React, { useState } from 'react'

export default function AvatarEdit() {
  const [avatar, setAvatar] = useState("")
  return (
    <div className='min-h-[100vh]'>
      <div className='flex flex-col items-center gap-2 '> 
        <h3 className='font-bold text-white text-lg '> Express Yourself </h3>
        <p className='opacity-75 '>  Change Your Avatar</p>
      </div>
      <section>
        <input
        type='file'
        />
      </section>
      
      {avatar}
    </div>
  )
}
