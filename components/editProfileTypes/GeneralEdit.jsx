'use client'
import availableCountriesAndCities from '@/app/utils';
import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'

export default function GeneralEdit() {
  const { isLightMode } = useAuth();

  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [filteredCities, setFilteredCities] = useState([])

  function findFilteredCities() {
    setFilteredCities(availableCountriesAndCities[selectedCountry])
  }

  useEffect(()=>{
    findFilteredCities()
  },[selectedCountry])


  return (
    <div className='flex flex-col gap-4 justify-center pl-[20px]'>
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
            placeholder=''
            />
            <label> Name <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i></label>
            <input 
            className='border-2 border-black bg-[#243642] rounded p-2 text-white'
            placeholder=''
            />
            <label> Surname <i title="Including your name real friends to find you" className={"fa-regular fa-circle-question ml-[5px] " + (isLightMode? "text-black" : "text-white")}></i></label>
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
