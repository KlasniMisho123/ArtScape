import React from "react";
import  Main  from "@/components/Main";
import {Poppins, Raleway } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Upload() {
  return (
      <Main>
        <div className="flex flex-col items-center py-6 pb-[150px] gap-6 bg-gray-100"> 
          <div className="flex flex-col items-center gap-4 bg-pink-300 p-4 rounded py-6 "> 
            <h2 className={`text-lg font-bold ` + poppins.className}> Share Your Creativity with the World <i className="fa-solid fa-earth-americas ml-2 "></i> </h2>
            <p className={` ` + raleway.className}> Vincent van Gogh never lived to see the immense love and recognition his art would receive. 
              Don’t keep it hidden share your creativity now </p> 
          </div> 
          {/* form */}
          <div className=" bg-white flex flex-col p-8 gap-2 rounded w-full max-w-[60%] shadow-xl rounded-2xl min-h-[600px]">
            <div className="flex gap-2 my-[10px] "> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">1</div>
              <div className=""> information </div>
            </div>
              <hr />
            <div className="flex flex-col gap-2 py-4 ">
              <div> 
                <h2 className="text-lg font-bold m-0 "> Title <span className="text-red-700 "> * </span> </h2>
                <p className="mt-[-5px]">50 characters max </p>
              </div>
              <input 
              className="p-2 border-2 border-black rounded outline-indigo-600"
              placeholder="title"
              />
            </div>

            <div className="flex flex-col gap-2 py-4 ">
                <h2 className="text-lg font-bold m-0 "> Description </h2>
              <textarea 
              className="p-2 border-2 border-black rounded max-h-[250px] outline-indigo-600"
              placeholder="Share the story behind your piece (optional) ..."
              />
            </div> 
            {/* popular types selection like in espressometer and then others input */}
            <input
            className="p-2 border-2 border-black rounded outline-indigo-600" 
            placeholder="type"
            />
            
            <input 
            className="p-2 border-2 border-black rounded outline-indigo-600"
            type="date"
            placeholder="Year of Creation"
            />
            <div className="flex gap-2 mb-[10px] mt-[20px]"> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">2</div>
              <div className=""> Pricing </div>
            </div>
            <hr />
            <div className=""> 
            <div> 
              <h2 className="text-lg font-bold py-2 "> <i class="fa-solid fa-coins text-[#F3C623] text-2xl "></i> <span className="text-red-700 "> * </span> </h2>
            </div>
            <select className="p-2 border-2 border-black rounded" defaultValue="">
              <option value="" disabled>Available to buy?</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            </div>
            <div className="flex gap-5 "> 
              <input className="p-2 border-2 border-black rounded w-[85%] max-w-[85%] outline-indigo-600" 
              type="number"
              placeholder="Price"
              min="0" 
              step="1"
              />
              <select className="p-2 border-2 border-black rounded min-w-[5%] " defaultValue="" >
                <option value="GEL">🇬🇪 GEL</option>
                <option value="USD">🇺🇸 USD$</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="GBP">🇬🇧 GBP£</option>
                <option value="JPY">🇯🇵 JPY¥</option>
              </select>
            </div>
            <div className="flex justify-evenly pt-[40px]"> 
              <button className="text-red-600 border-2 border-red-600 rounded p-2 px-8 "> <i className="fa-solid fa-broom"></i>Clear </button>
              <button className="text-green-600 border-2 border-green-600 rounded p-2 px-8 "> Add  <i className="fa-solid fa-map-pin"></i></button>
            </div>
          </div>
        </div>
      </Main>
    );
}