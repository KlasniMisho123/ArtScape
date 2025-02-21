import React from 'react'
import GeneralEdit from './editProfileTypes/GeneralEdit'
import AccountDetailsEdit from './editProfileTypes/AccountDetailsEdit'
import AvatarEdit from './editProfileTypes/AvatarEdit'
import MiniProfileEdit from './editProfileTypes/MiniProfileEdit'

export default function AccManegmentSec(props) {
  const {currentEditSec} = props
  return (
    <div className='flex flex-col w-[80%] h-[100vh] '>
      <div className='flex justify-center font-bold md:text-2xl sm:text-sm '> {currentEditSec} </div>
      <div className='flex flex-col justify-between mt-[40px]'>
          {currentEditSec === "General"? <GeneralEdit /> : 
          currentEditSec === "Account Details"? <AccountDetailsEdit /> :
          currentEditSec === "Avatar Edit"? <AvatarEdit /> :
          currentEditSec === "Mini Profile"? <MiniProfileEdit /> :""}
      </div>
    </div>
  )
}
