import { useState, useEffect } from 'react';

export default function useCountryFlag(country) {
    const [countryIndex, setCountryIndex] = useState("");

    const countryCodes = {
        "Georgia": "ge",
        "Germany": "de",
        "France": "fr",
        "Italy": "it",
        "Spain": "es",
        "United Kingdom": "gb",
        "Poland": "pl",
        "Sweden": "se"
    };

    useEffect(() => {
        setCountryIndex(countryCodes[country] || country); 
    }, [country]); 

    return countryIndex;
}
