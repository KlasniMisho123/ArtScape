import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'
import StatusMessage from '../StatusMessage';
import { db } from "@/firebase"
import {collection, addDoc, doc, setDoc, getDoc} from "firebase/firestore"
import useCountryFlag from "../customHooks/useCountryFlag"

export default function AvatarEdit() {
  const { currentUser, updateAvatar } = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState("")
  const [avatar, setAvatar] = useState("")
  const [status, setStatus] = useState(0)
  const [timeOfService, setTimeOfService] = useState("")
  const [timeOfServiceNumber, setTimeOfServiceNumber] = useState("")
  const [userCountry, setUserCountry] = useState("")
  const [userCity, setUserCity] = useState("")
  const [isLoading, setIisLoading] = useState(false)

  let countryIndex = useCountryFlag()

  function handleAvatarUpload(e) {
    const file = e.target.files[0]; 
    if (!file) return;

    const newBlobURL = URL.createObjectURL(file);

    setAvatar(newBlobURL);
  }

  function handleClear() {
    setAvatar("")
  }

  async function handleSubmit() {
    try{
      setIisLoading(true)
      
      await updateAvatar(avatar);
      
    } catch(err) {
      console.log(err.message)
      setStatus(400)

      setTimeout(() => {
        setStatus(0);
      }, 3000);
      
    } finally {
      setIisLoading(false)
      setStatus(200)

      setTimeout(() => {
        setStatus(0);
      }, 3000);

    }
  }

  async function calculateTimeSinceUTC(UTCtime) {
    if (!UTCtime) {
      console.log("Invalid timestamp");
      return;
  }

    const currentDate = new Date()
    const createdDate = new Date(Number(UTCtime));

    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    const fullYears = Math.floor(differenceInDays / 365);
    
    if(fullYears > 0) {
      setTimeOfServiceNumber(fullYears)
      setTimeOfService(`Years of Service`)
    } else {
      setTimeOfService(`Days of Service`)
      setTimeOfServiceNumber(differenceInDays)
    }
  }

  async function startingInputValues() {
      try {
        const userRef = doc(db, "users", currentUser.uid )
        const userInfo = await getDoc(userRef)

        // Days/Years Of Service
        const createdAt = currentUser?.reloadUserInfo?.createdAt
        await calculateTimeSinceUTC(createdAt)

        //  Country,City
        const userCountry = userInfo.data()?.Country
        const userCity = userInfo.data()?.City
        setUserCountry(userCountry)
        setUserCity(userCity)
        
        // setCurrentAvatar(currentUser?.photoURL || ""); -> to ignore Error log
        setCurrentAvatar("");
      } catch(err) {
        // console.log(err.message) -> to ignore Error log
      } 
    }
  
    useEffect(() => {
      startingInputValues()
      // console.log("currentUser: ",currentUser)
    },[currentUser])
    

  return (
    <div className=' flex flex-col gap-8 '>
      <div className='flex flex-col ml-2 gap-2 '> 
        <h3 className='font-bold text-xl '> Express Yourself  </h3>
        <p className='opacity-75 '>  Change Your Avatar </p>
      </div>
      <section className='flex gap-14 mt-[20px]'>
        <div className='flex gap-12 items-end '>
          <img 
          alt='Avatar 64x64'
          src={avatar || currentAvatar|| "defaultProfilePicture.jpg"}
          onError={(e) => e.target.src = "defaultProfilePicture.jpg"}
          className='h-64 w-64 object-cover'/>
          <img 
          alt='Avatar 32x32'
          src={avatar || currentAvatar || "defaultProfilePicture.jpg"}
          onError={(e) => e.target.src = "defaultProfilePicture.jpg"}
          className='h-32 w-32 object-cover'/>
          <img 
          alt='Avatar 16x16'
          src={avatar || currentAvatar || "defaultProfilePicture.jpg"}
          onError={(e) => e.target.src = "defaultProfilePicture.jpg"}
          className='h-16 w-16 object-cover'/>
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

      <div className="mx-auto flex flex-col w-[50%] miniprofile-bg-theme shadow-2xl h-full p-4 gap-4 ">
          <div className='flex gap-8 '>
            {/* Theme,background change?*/}
            <img 
                alt="Avatar"
                src={avatar || currentAvatar|| "defaultProfilePicture.jpg"}
                className="h-32 w-32 object-cover shadow-4xl border-b-4 border-[#6dcff6] " 
                onError={(e) => e.target.src = "defaultProfilePicture.jpg"}
            />
                

            <div className='flex flex-col '>
                <h2 className='font-bold text-lg text-white '>{currentUser?.displayName || currentUser?.uid?.slice(0, 12)}</h2>
                {/* STATS/ RANDOM STATS/ Custom Stats /followers,following...*/}
                <p className='flex items-center gap-2 text-white '> <img className='w-[15%] h-[60%] object-fit' src={`https://flagcdn.com/w40/${countryIndex}.png`} alt="France Flag" /> {userCountry}, {userCity} </p>
            </div>
          </div>
          <div className="flex items-center gap-2"> 
  <div className="border-2 border-gray-800 bg-gray-200 text-gray-900 font-semibold text-lg px-3 py-1 rounded-md">
    {timeOfServiceNumber}
  </div> 
  <p className="text-lg font-medium text-white ">{timeOfService}</p>
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
      <section className='mx-auto my-8 h-2 text-center'>
        <StatusMessage status={status} />
      </section>
    </div>
  )
}
