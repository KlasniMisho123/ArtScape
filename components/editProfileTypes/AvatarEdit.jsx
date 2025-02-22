import React, { useState } from 'react'

export default function AvatarEdit() {
  const [avatar, setAvatar] = useState("")
  return (
    <div className='min-h-[100vh]'>
      <p className='opacity-75'>Choose your profile picture</p>
      {avatar}
    </div>
  )
}
