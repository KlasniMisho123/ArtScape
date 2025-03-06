import { useState, useEffect } from 'react';
import { db } from "@/firebase"
import {collection, addDoc, doc, setDoc, getDoc} from "firebase/firestore"

export default function useCountryFlag() {
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

    useEffect(async () => {
        const userRef = doc(db, "users", currentUser.uid )
        const userInfo = await getDoc(userRef)

        const userCountry = userInfo.data()?.Country

        setCountryIndex(countryCodes[userCountry] || userCountry);
    }, []); 

    return countryIndex;
}
