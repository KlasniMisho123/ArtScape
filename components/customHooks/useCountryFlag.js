import React, { useState, useEffect } from 'react'

export default function useCountryFlag(country) {
    const [countryIndex, setCountryIndex] = useState("")

    useEffect(()=>{
        if(country==="Georgia") {
            setCountryIndex("ge")
        } else if(country==="Germany"){
            setCountryIndex("de")
        } else if(country==="France"){
            setCountryIndex("fr")
        } else if(country==="Italy"){
            setCountryIndex("it")
        } else if(country==="Spain"){
            setCountryIndex("es")
        } else if(country==="United Kingdom"){
            setCountryIndex("gb")
        } else if(country==="Poland"){
            setCountryIndex("pl")
        } else if(country==="Sweden"){
            setCountryIndex("se")
        } else {
            setCountryIndex(country)
        }   
    },[])

  return (countryIndex);
  
}
