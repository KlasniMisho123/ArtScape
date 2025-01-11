import { Open_Sans, Pacifico, Poppins } from 'next/font/google';
import React from 'react'


const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] })

export default function ProfileDashboard() {

  const gridDefaultCss = ("flex flex-col bg-white p-[30px] rounded-lg shadow-lg ")
  

  return (
    <div className='flex mt-[30px] p-[40px] w-[85%] mx-auto gap-[50px] bg-gray-100 rounded-lg '>
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
                  <div className='flex gap-2 items-center '>
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
                  <button className='bg-gray-200 '> Edit Profile </button>
        </div>
        <div className="flex flex-col gap-[30px] ">
        <div className={gridDefaultCss + ""}>
          <div className='flex items-center justify-between '>
           <p> About Klasnimisho123 </p> <button className="fa-regular fa-pen-to-square hover:text-gray-500 "></button>
          </div>
        </div>
            <div className={`${gridDefaultCss} `}>
              <div className='flex justify-between gap-[50px] mb-2 '> <h3>Klasnimisho123's ArtWorks</h3> <h3>...</h3> </div>
              <div className='p-4 bg-red-300 flex gap-10 '>
                  <div className='h-[200px] w-[200px] bg-green-200'></div>
                  <div className='h-[200px] w-[200px] bg-green-200'></div>
                  <div className='h-[200px] w-[200px] bg-green-200'></div>
              </div>
              <div className='mx-auto mt-2 '> See All </div>
            </div>
        </div>
    </div>
  )
}
