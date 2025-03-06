import React, { useState, useEffect } from 'react'

export default function useCountryFlag(country) {
    const [countryIndex, setCountryIndex] = useState("")

    useEffect(()=>{
        if(country==="Georgia") {
            setCountryIndex("ge")
        } if(country==="Germany"){
            setCountryIndex("ge")
        } if(country==="Germany"){
            setCountryIndex("ge")
        }

    },[])

  return (countryIndex);
  
}
