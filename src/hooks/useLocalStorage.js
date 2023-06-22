import { useEffect, useState } from "react";

export const useLocalStorage = (initialState, key) => {
    const [value, setValue] = useState(() => {
        const storeValue = localStorage.getItem(key);
        return storeValue ? JSON.parse(storeValue) : initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};