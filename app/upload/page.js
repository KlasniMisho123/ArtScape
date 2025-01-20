import React from "react";
import  Main  from "@/components/Main";
import {Poppins, Raleway } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Upload() {
  return (
      <Main>
        <div className="flex flex-col items-center mt-[30px] py-2 gap-6 "> 
          <div className="flex flex-col items-center py-2 gap-4 bg-pink-300 p-4 "> 
            <h2 className={`text-lg font-bold ` + poppins.className}> Share Your Creativity with the World <i className="fa-solid fa-earth-americas ml-2 "></i> </h2>
            <p className={` ` + raleway.className}> Vincent van Gogh never lived to see the immense love and recognition his art would receive. 
              Don’t keep it hidden share your creativity now </p> 
          </div> 
          <div> ArtForm </div>
          {/* title, desc, type ,  Dimensions , Year of Creation, Availability, price */}
          <input 
          placeholder="title"
          />
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
          placeholder="Year of Creation"
          />
          <input 
          placeholder="Availability"
          />
          <input 
          placeholder="price"
          />
          
        </div>
      </Main>
    );
}