import React from "react";
import  Main  from "@/components/Main";
import {Poppins, Raleway } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Upload() {
  return (
      <Main>
        <div className="flex flex-col items-center py-2 gap-6 "> 
          <div className="flex flex-col items-center py-2 gap-4 bg-pink-300 p-4 "> 
            <h2 className={`text-lg font-bold ` + poppins.className}> Share Your Creativity with the World <i className="fa-solid fa-earth-americas ml-2 "></i> </h2>
            <p className={` ` + raleway.className}> Vincent van Gogh never lived to see the immense love and recognition his art would receive. 
              Don’t keep it hidden share your creativity now </p> 
          </div> 
          <div className=" flex flex-col p-4 gap-2 bg-gray-100 rounded w-full max-w-[50%]">
            <div className="flex gap-2 my-[10px] "> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">1</div>
              <div className=""> information </div>
            </div>
            <div className="flex flex-col gap-2">
              <div> 
                <h2 className="text-lg font-bold m-0 "> Title <span className="text-blue-700 "> * </span> </h2>
                <p className="mt-[-5px]">50 characters max </p>
              </div>
              <input 
              className="p-2 border-2 border-black rounded "
              placeholder="title"
              />
            </div>
              
              <input 
              placeholder="desc"
              />
            
            
            <input 
            placeholder="type"
            />
            <input 
            placeholder="Dimensions"
            />
            <input 
            type="year"
            placeholder="Year of Creation"
            />
            <select defaultValue="">
              <option value="" disabled>Available to buy?</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <input 
            placeholder="price"
            />
          </div>
        </div>
      </Main>
    );
}