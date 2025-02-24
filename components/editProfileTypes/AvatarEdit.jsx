import React, { useState } from 'react'

export default function AvatarEdit() {
  const [avatar, setAvatar] = useState("")
  return (
    <div className=' flex flex-col gap-8 '>
      <div className='flex flex-col ml-2 gap-2 '> 
        <h3 className='font-bold text-white text-xl '> Express Yourself </h3>
        <p className='opacity-75 '>  Change Your Avatar</p>
      </div>
      <section className='flex gap-14 mt-[20px]'>
        <div className='flex gap-12 items-end '>
          <img src='defaultProfilePicture.jpg' className='h-64 w-64 object-cover'/>
          <img src='defaultProfilePicture.jpg' className='h-32 w-32 object-cover'/>
          <img src='defaultProfilePicture.jpg' className='h-16 w-16 object-cover'/>
        </div>
      <div className='flex flex-col  gap-4'>
      <input
        type="file"
        className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-600
              hover:file:bg-blue-100"
      />
        <p>Upload a file from your device. Image <br/>
        should be square, at least 184px x 184px.</p>
      </div>
      </section>
      <section>
      <div className='flex flex-col ml-2 gap-2 '> 
        <h3 className='font-bold text-white text-xl '> Mini Profile </h3>
        <p className='opacity-75 '>Preview your profile</p>
      </div>

      <div className="mx-auto flex w-[50%] miniprofile-bg-theme  shadow-2xl h-full  p-4 ">
        <div className='flex gap-8 '>
          <img src="defaultProfilePicture.jpg" className="h-32 w-32 object-cover shadow-2xl" />
          <h2 className='font-bold text-lg text-white '>GOD OF FIREWORKS</h2>
        </div>
      </div>


      </section>
      <div className='flex justify-end gap-16 ml-[10px] mt-[80px]'>
          <button className='rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 '> Cancel</button>
          <button className='rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '> Save</button>
        </div>
    </div>
  )
}
