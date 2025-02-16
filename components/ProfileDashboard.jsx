'use client'
import { Open_Sans, Pacifico, Poppins } from 'next/font/google';
import React, { useEffect, useState} from 'react'
import { artworks } from "../app/demoData";
import Link from 'next/link';
import { db } from "@/firebase"
import { addDoc, doc, setDoc, getDoc } from "firebase/firestore"
import { useAuth } from '@/context/AuthContext';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] })

export default function ProfileDashboard() {
  const { currentUser } = useAuth()

  const [profileTypeActive, setProfileTypeActive ] = useState("overview")
  const [aboutEdit, setAboutEdit] = useState(false)
  const [aboutText, setAboutText] = useState(``)
  const [showArtExpanded, setShowArtExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const gridDefaultCss = ("flex flex-col bg-white p-[30px] rounded-lg shadow-lg ")
  const basicBtnHover = (" hover:text-white hover:bg-black")


  function handleProfileTypeChange(type) {
    console.log("currentType: ", profileTypeActive)
    setProfileTypeActive(type)
  }

  function showPersonalArtHande() {
    setShowArtExpanded(!showArtExpanded)
  }

  async function aboutMeUpdate() {
    try{
      setIsLoading(true)

      const userId = currentUser.uid;

      const userRef = doc(db, "users", userId)
      const userSnap = await getDoc(userRef)

      // await setDoc(userRef, aboutText, {merge:true})
      if(userSnap.exists()) {
        await setDoc(userRef, { "AboutMe": aboutText }, {merge:true})
        console.log("Updated aboutMe successfully.");
      } else {
        await setDoc(userRef, { "AboutMe": aboutText })
        console.log("User document created with aboutMe.");
      }
    } catch(err) {
      console.log("aboutMeUpdate Err: ", err)
    } finally {
      setIsLoading(false)
      setAboutEdit(false)
    }
  }
  

  useEffect(() => {
    async function fetchAboutText() {
      try {
      

      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      console.log("userSnap: ", userSnap)
      if(userSnap.exists()){
        setAboutText((userSnap.data().aboutMe || ""))
      }
        
      } catch(err) {
        console.log(err)
      }
    }
  //   fetchAboutText()
  },[])


  return (
    <div className='mt-4'>
      <div className=' border-gray-200 p-2 flex justify-center '>
        <div className='flex gap-4 bg-pink-300 p-1 rounded text-black '>

          <button onClick={()=>{
            handleProfileTypeChange("overview")
          }} className={
            `flex items-center gap-2 p-1 px-2 hover:bg-red-200 border-b-2 ` + 
            (profileTypeActive === "overview" ? "border-red-500" : "border-transparent")
          }>
             <i className="fa-regular fa-eye "></i> <span className='text-white'> Overview </span> 
          </button>

          <button onClick={()=>{
            handleProfileTypeChange("gallery")
          }} className={
             `flex items-center gap-2 p-1 px-2 hover:bg-red-200 border-b-2 ` + 
             (profileTypeActive === "gallery" ? "border-red-500" : "border-transparent")
          }>
             <i className="fa-regular fa-images"></i> <span className='text-white'> Personal Gallery </span>
          </button>
        </div>
      </div>
        <div className='flex  p-[40px] w-[90%] mx-auto gap-[50px] bg-gray-100 rounded-lg text-black'>
            <div className={gridDefaultCss}>
                <button className="flex flex-col overflow-hidden rounded-full border-2 border-gray-300 h-300 w-[200px] min-w-300 "> 
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
                      <div className='flex flex-col justify-evenly  '> 
                        <p><i className="fa-solid fa-users-viewfinder"></i> Followers: 5 </p>
                        <p><i className="fa-solid fa-users"></i>  Following: 3 </p>
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
            {profileTypeActive === "overview"? (
            <div className="flex flex-col gap-[30px] max-w-[960px] ">
            <div className={gridDefaultCss + `${aboutEdit?"pb-4":" "}`}>
              <div className='flex flex-col gap-8 '>
                <div className='flex items-center justify-between'>
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
              {/* handle firebase update */}
                <button onClick={
                  aboutMeUpdate
                } 
                className={`px-2 mx-auto border-2 border-black rounded flex gap-4 items-center px-4 py-1 rounded-xl ${basicBtnHover}`}>
                     <span> Aplly Changes </span>
                </button>
                </>
                ):(
                <div className='px-1 '>
                      {aboutText}
                  </div>
                )}
              </div>
            </div>
                <div className={`${gridDefaultCss}  py-[30px] `}>
                  <div className='flex justify-between gap-[50px] mb-4 '> <h3>Klasnimisho123's ArtWorks</h3> <button className=' text-lg hover:text-gray-500 '>...</button> </div>
                  <div className={` p-2 flex my-[30px] gap-10 ` + (showArtExpanded? "grid grid-cols-3 gap-y-10 overflow-y-hidden ":"")} >    
                        {(showArtExpanded ? artworks : artworks.slice(0, 3)).map((art, index) => (
                          <div key={art.id} className="h-[350px] min-w-[250px] max-w-[250px] flex flex-col justify-between">
                            <div className='w-full h-full overflow-hidden  '>
                              <img src={art.imgLink} alt={art.title} className='object-cover h-full w-full ' />
                            </div>
                            <div className='flex flex-col items-center mt-4 p-1 border-2 '>
                              <h2 className='font-bold'>{art.title}</h2>
                              <span className='font-light'> {art.artist} </span>
                            </div>
                          </div>
                        ))} 
                  </div> 
                  <button 
                  onClick={showPersonalArtHande} 
                  className={'flex items-center gap-1 mx-auto mt-[60px] py-2 px-4 border-2 border-black rounded-[32px] ' + basicBtnHover}>
                    <p className=''> {showArtExpanded? "See Less":"See More"} </p>
                    <i className="fa-solid fa-angles-right"></i>
                      </button>
                </div>
            </div>
        ) : (
          <div>
        {/*personal GALLERY Side*/}
        <div className={'bg-white p-[30px] justify-evenly rounded-lg shadow-lg p-2 flex flex-col gap-6 h-full overflow-hidden '}>
          <div>
             <Link href={"/upload"}
              className='bg-green-500 p-[5px] px-[10px] rounded hover:opacity-90' 
              title='Add your work to gallery'> <i className="fa-solid fa-plus text-white "></i> </Link>
          </div> 
          <div className={`grid grid-cols-3 gap-x-6 gap-y-8`}>
            {artworks.map((art) => (
              <button 
              key={art.id} 
              className='w-[250px] art-gallery-animation shrink-0 '>
              <div className='w-full bg-blue-300 overflow-hidden rounded'>
                <img src={art.imgLink} alt={art.title} className='object-cover w-full h-[300px]' />
              </div>
              <div className='flex flex-col items-center mt-4 p-1 border-2 '>
                <h2 className='font-bold'>{art.title}</h2>
                <span className='font-light'> {art.artist} </span>
              </div>
            </button>
            ))} 
          </div>
        </div>
      </div>
      )}  
        </div>
      </div>
  )
}
