'use client'
import availableCountriesAndCities from '@/app/utils';
import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'

export default function GeneralEdit() {
  const { isLightMode, currentUser } = useAuth();

  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [filteredCities, setFilteredCities] = useState([])
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [aboutText, setAboutText] = useState("")
  const [socialOne, setSocialOne] = useState("")
  const [socialTwo, setSocialTwo] = useState("")
  const [socialLinkOne, setSocialLinkOne] = useState("")
  const [socialLinkTwo, setSocialLinkTwo] = useState("")
  
  let currentUsername = currentUser?.displayName

  function findFilteredCities() {
    setFilteredCities(availableCountriesAndCities[selectedCountry])
  }

  function clearGeneralEdit() {
    setSelectedCountry("")
    setSelectedCity("")
    setFilteredCities([])
    setUsername("")
    setName("")
    setSurname("")
    setAboutText("")
    setSocialOne("")
    setSocialTwo("")
    setSocialLinkOne("")
    setSocialLinkTwo("")
  }

  useEffect(()=>{
    //filter Cities by Countries
    findFilteredCities()

  },[selectedCountry])

  useEffect(()=>{
    console.log()
  },[])

  return (
    <div className='flex flex-col gap-4 justify-center '>
      <h3 className='font-bold text-lg '> About </h3>
      <p className='opacity-75'>Set your profile name and details.Providing additional informations 
        like real name can help <br/> friends to find you on the ArtScape Community.</p>
        <section>
          <h3 className=' text-lg pb-2'>General</h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />
          
          <div className='flex flex-col p-4 gap-4 '>
            <label> Username</label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder={currentUsername}
            />
            <label> Name <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i></label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder=''
            />
            <label> Surname <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i></label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            value={surname}
            onChange={(e)=>{setSurname(e.target.value)}}
            placeholder=''
            />
          </div>
        </section>
        <section>
          <h3 className=' text-lg pb-2'>Location <i title="Including your location will help ensure accurate shipping to avoid delays or errors." className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i> </h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />

          <div className='flex flex-col p-4 gap-4 '>
            <label> Country </label>
            <select 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            onChange={(e)=>{
              setSelectedCountry(e.target.value)
            }}
            >
              <option className='text-gray-400' value="">None</option>
              {Object.keys(availableCountriesAndCities).map((country,index) => {
                return(<option value={country} key={country}> {country} </option>)
              })}
            </select>

            <label> City </label>
            <select
             disabled={selectedCountry === ""}
             className={'border-2 border-black bg-[#243642] rounded p-2 text-white ' + 
             (selectedCountry === ""? "cursor-not-allowed bg-gray-400 border-gray-400" :"" )}
             onChange={(e)=>{
              setSelectedCity(e.target.value)
            }}
             > 
              <option className='text-gray-400' value="">None</option>
              {Array.isArray(filteredCities) && filteredCities.length > 0 ? (
                (filteredCities).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))
                ) : (
                  <option value="">No cities available</option>
              )}
            </select>
           </div>
        </section>
        <section>
          <h3 className='text-lg pb-2'> About Me </h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />
          <div className='flex flex-col p-4 gap-4 '>
          <textarea 
            className="border-2 border-black bg-[#243642] rounded p-2 text-white max-h-[200px] min-h-[70px] overflow-y-hidden"
            value={aboutText}
            onChange={(e)=>{setAboutText(e.target.value)}}
          />
          </div>
        </section>
        <section>
          <h3 className='text-lg pb-2'> Socials </h3>
          <hr className={"opacity-60 " + isLightMode? "border-t-2 border-black":""} />
          <div className='flex flex-col p-4 gap-4'> 
            <div className='flex gap-2'>
            <input 
              className='border-2 border-black bg-[#243642] rounded p-2 text-white'
              value={socialOne}
              onChange={(e)=>{setSocialOne(e.target.value)}}
              placeholder='Social'
            />
              <input 
                className='border-2 border-black bg-[#243642] rounded p-2 text-white w-full'
                value={socialLinkOne}
                onChange={(e)=>{setSocialLinkOne(e.target.value)}}
                placeholder='Link'
              />
          </div> 
          <div className='flex gap-2'>
              <input 
                className='border-2 border-black bg-[#243642] rounded p-2 text-white '
                value={socialTwo}
                onChange={(e)=>{setSocialTwo(e.target.value)}}
                placeholder='Social'
              />
              <input 
                className='border-2 border-black bg-[#243642] rounded p-2 text-white w-full'
                value={socialLinkTwo}
                onChange={(e)=>{setSocialLinkTwo(e.target.value)}}
                placeholder='Link'
              />
            </div> 
          </div>
        </section>
        <div className='flex justify-end gap-16 ml-[10px] mt-[40px]'>
          <button
           className='rounded w-[20%] py-1 text-white bg-[#243642] shadow-lg hover:brightness-110 '
            onClick={clearGeneralEdit}
          > Cancel</button>
          <button className='rounded w-[20%] py-1 text-white linear-lblue-blue shadow-lg hover:brightness-110 '> Save</button>
        </div>
    </div>
  )
}
