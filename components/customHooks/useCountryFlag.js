import { useState, useEffect } from 'react';
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from '@/context/AuthContext';

export default function useCountryFlag() {
    const { currentUser } = useAuth(); 
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

    const getCountryIndex = async () => {
        if (currentUser) {
            const userRef = doc(db, "users", currentUser.uid);
            const userInfo = await getDoc(userRef);
            const userCountry = userInfo.data()?.Country;

            setCountryIndex(countryCodes[userCountry] || userCountry);
        }
    };

    useEffect(() => {
        if (currentUser) {
            getCountryIndex();
        }
    }, [currentUser]);

    return countryIndex;
}
