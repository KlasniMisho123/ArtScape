import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(initialValue);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const savedValue = localStorage.getItem(key);
            if (savedValue !== null) {
                setValue(JSON.parse(savedValue));
            }
        }
    }, [isClient, key]);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [isClient, key, value]);

    return [value, setValue];
}

// ERRORS? redo manually.