import React from "react";
import  Main  from "@/components/Main";
import {Poppins, Raleway } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Upload() {
  return (
      <Main>
        <div className="flex justify-center mt-[30px] bg-pink-300 py-2 "> 
          <div className="flex flex-col items-center py-2 gap-4 "> 
            <h2 className={`text-lg font-bold ` + poppins.className}> Share Your Creativity with the World </h2>
            <p className={` ` + raleway.className}> Vincent van Gogh never lived to see the immense love and recognition his art would receive. 
              Don’t keep it hidden share your creativity now <i className="fa-solid fa-earth-americas"></i> </p> 
          </div> 
        </div>
      </Main>
    );
}