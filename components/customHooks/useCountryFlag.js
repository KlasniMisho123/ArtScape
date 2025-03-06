import React, { useState, useEffect } from 'react'

export default function useCountryFlag(country) {
    const [countryIndex, setCountryIndex] = useState("")

    useEffect(()=>{
        console.log("country: ",country)
    },[])

  return [countryIndex, setCountryIndex];
  
}
