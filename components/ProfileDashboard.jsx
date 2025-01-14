'use client'
import { Open_Sans, Pacifico, Poppins } from 'next/font/google';
import React, { useState} from 'react'
import { artworks } from "../app/demoData";
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] })

export default function ProfileDashboard() {
  const [profileTypeActive, setProfileTypeActive ] = useState("overview")
  const [aboutEdit, setAboutEdit] = useState(false)
  const [aboutText, setAboutText] = useState(``)
        
    
  const gridDefaultCss = ("flex flex-col bg-white p-[30px] rounded-lg shadow-lg ")

  function handleProfileTypeChange(type) {
    console.log("currentType: ", profileTypeActive)
    setProfileTypeActive(type)
  }

  return (
    <div className='mt-4'>
      <div className=' border-gray-200 p-2 flex justify-center '>
      {/* <div className=' border-gray-200 p-2 flex px-[80px] w-[90%] '> */}
        <div className='flex gap-4 bg-gray-200 p-1 rounded '>

          <button onClick={()=>{
            handleProfileTypeChange("overview")
          }} className={
            `flex items-center gap-2 p-1 px-2 hover:bg-gray-100 border-b-2 ` + 
            (profileTypeActive === "overview" ? "border-red-500" : "border-transparent")
          }>
             <i className="fa-regular fa-eye "></i> <span className='text-white'> Overview </span> 
          </button>

          <button onClick={()=>{
            handleProfileTypeChange("gallery")
          }} className={
             `flex items-center gap-2 p-1 px-2 hover:bg-gray-100 border-b-2 ` + 
             (profileTypeActive === "gallery" ? "border-red-500" : "border-transparent")
          }>
             <i className="fa-regular fa-images"></i> <span className='text-white'> Personal Gallery </span>
          </button>
        </div>
      </div>
        <div className='flex  p-[40px] w-[90%] mx-auto gap-[50px] bg-gray-100 rounded-lg '>
            <div className={gridDefaultCss}>
                <button className="flex flex-col overflow-hidden rounded-full border-2 border-gray-300 h-300 w-300 min-w-300 "> 
                        <img
                        className="object-cover"
                        src="https://avatars.githubusercontent.com/u/117183990?s=400&u=dbcd799397eb331732f5e0be39ee6cfd1a00f70f&v=4"
                        alt="Profile Picture Animation"
                        height={250}
                        width={250}
                        />
                </button>
                  <div className={`flex flex-col gap-2 py-4`}>
                      <h3 className={' ' + openSans.className}>KLASNIMISHO123</h3>
                      <div className='flex justify-evenly items-center '>
                        <i className="fa-solid fa-users"></i> 
                        <p> Following: 3 </p>
                        <p> Followers: 5 </p>
                        </div>
                      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 ">Art Preferences</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                          <li>Impressionism</li>
                          <li>Surrealism</li>
                          <li>Modern Art</li>
                          <li>Oil Painting</li>
                        </ul>
                      </div>
                  </div>
                      <Link href={"/accountmanegement"} className='border-2 p-1 px-2 rounded ' > <i className="fa-solid fa-gear"></i> Edit Profile </Link>
            </div>
            <div className="flex flex-col gap-[30px] max-w-[960px] ">
            <div className={gridDefaultCss + `${aboutEdit?"pb-2":" "}`}>
              <div className='flex flex-col gap-8 '>
                <div className='flex items-center justify-between'>
                  {/* HERE */}
                  <p> About Klasnimisho123 </p> <button title='Edit' 
                  onClick={()=>{
                    setAboutEdit(true)
                  }}
                   className="fa-regular fa-pen-to-square hover:text-gray-500 "></button>
                </div>
              {aboutEdit?(
                <>
              <textarea 
              className="h-[300px] p-4 border rounded focus:outline-none " 
              value={aboutText}
              onChange={(e)=>{
                setAboutText(e.target.value)
              }}/>
                <button onClick={()=>{
                    setAboutEdit(false)
                  }} className='px-1 py-1 mx-auto flex gap-4 items-center bg-gray-900 rounded-lg shadow-lg hover:bg-gray-700'>
                     <span className='text-white font-bold text-[20px] tracking-wide border-b-2 border-r-2 rounded border-white px-2 py-1'> Aplly </span>  </button>
                </>

                ):(
                <div className='px-1 '>
                      {aboutText}
                  </div>
                )}
              </div>
            </div>
                <div className={`${gridDefaultCss}  py-[30px] bg-red-300 `}>
                  <div className='flex justify-between gap-[50px] mb-4 '> <h3>Klasnimisho123's ArtWorks</h3> <button className=' text-lg hover:text-gray-500 '>...</button> </div>
                  {/* User artwork rendering div */}
                  <div className='p-2 flex my-[30px] gap-10 '>    
                        {artworks.slice(0, 3).map((art, index) => (
                          <div key={art.id} className='h-[300px] w-[250px] bg-green-200'>
                            <div className='w-full h-full bg-blue-300 overflow-hidden  '>
                              <img src={art.imgLink} alt={art.title} className='object-cover h-full w-full ' />
                            </div>
                            <div className='flex flex-col items-center mt-4 p-1 border-2 '>
                              <h2 className='font-bold'>{art.title}</h2>
                              <span className='font-light'> {art.artist} </span>
                            </div>
                          </div>
                        ))} 
                  </div> 
                  <button className='flex items-center gap-1 mx-auto mt-[60px] py-2 px-4 border-2 border-black rounded-[32px] hover:opacity-75 '>
                    <p className=''> See All </p>
                    <i className="fa-solid fa-angles-right"></i>
                      </button>
                </div>
            </div>
        </div>
      </div>
  )
}
