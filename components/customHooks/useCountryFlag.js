import React, { useState, useEffect } from 'react'

export default function useCountryFlag(country) {
    const [countryIndex, setCountryIndex] = useState("")

    useEffect(()=>{
        if(country==="Georgia") {
            setCountryIndex("ge")
        } else {
            console.log("ELSE")
        }
    },[])

  return (countryIndex);
  
}
