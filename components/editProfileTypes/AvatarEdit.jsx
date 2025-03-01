import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'

export default function AvatarEdit() {
  const { currentUser, updateAvatar } = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState("")
  const [avatar, setAvatar] = useState("")
  const [isLoading, setIisLoading] = useState(false)

  function handleAvatarUpload(event) {
    const file = event.target.files[0];

    if(file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl)
    }
  }

  function handleClear() {
    setAvatar("")
  }

  async function handleSubmit() {
    try{
      setIisLoading(true)

      updateAvatar(avatar)
      
    } catch(err) {
      console.log(err.message)
    } finally {
      setIisLoading(false)
    }
  }

  useEffect(()=> {
    setCurrentAvatar(currentUser?.photoURL)
  },[])

  return (
    <div className=' flex flex-col gap-8 '>
      <div className='flex flex-col ml-2 gap-2 '> 
        <h3 className='font-bold text-xl '> Express Yourself </h3>
        <p className='opacity-75 '>  Change Your Avatar</p>
      </div>
      <section className='flex gap-14 mt-[20px]'>
        <div className='flex gap-12 items-end '>
          <img src={avatar || "defaultProfilePicture.jpg"} className='h-64 w-64 object-cover'/>
          <img src={avatar || "defaultProfilePicture.jpg"} className='h-32 w-32 object-cover'/>
          <img src={avatar || "defaultProfilePicture.jpg"} className='h-16 w-16 object-cover'/>
        </div>
      <div className='flex flex-col  gap-4'>
      <input
        type="file"
        accept="image/*" 
        onChange={handleAvatarUpload} 
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
      <div className='flex flex-col ml-2 gap-2 my-[20px]'> 
        <h3 className='font-bold text-xl '> Mini Profile </h3>
        <p className='opacity-75 '>Preview your profile</p>
      </div>

      <div className="mx-auto flex flex-col w-[50%] miniprofile-bg-theme  shadow-2xl h-full p-4 ">
          <div className='flex gap-8 '>
            {/* Theme,background change?*/}
            <img 
                src={avatar || currentAvatar || "defaultProfilePicture.jpg"} 
                className="h-32 w-32 object-cover shadow-4xl"
            />
            {/* <img src={avatar || "defaultProfilePicture.jpg"} className="h-32 w-32 object-cover shadow-4xl " /> */}
            <div className='flex flex-col'>
                <h2 className='font-bold text-lg text-white '>GOD OF FIREWORKS</h2>
                {/* STATS/ RANDOM STATS/ Custom Stats /followers,following...*/}
                <p>Aboutme/Status</p>
            </div>
          </div>
      </div>


      </section>
      <div className='flex justify-end gap-16 ml-[10px] mt-[150px]'>
          <button 
          onClick={handleClear}
          className='rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 '> Cancel</button>
          <button 
          onClick={handleSubmit}
          className='rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '> Save</button>
        </div>
    </div>
  )
}
