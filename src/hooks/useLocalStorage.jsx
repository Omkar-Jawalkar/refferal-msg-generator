import { useState } from "react";

const useLocalStorage = (key, value) => {
    const [state, setState] = useState(() => {
        try {
            const localStorageValue = localStorage.getItem(key);
            if (localStorageValue) {
                return JSON.parse(localStorageValue);
            } else {
                return value;
            }
        } catch (error) {
            console.log(error);
            return value;
        }
    });

    const updateState = (value) => {
        try {
            if (typeof value === Function) {
                return value(state);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
                setState(value);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return [state, updateState];
};

export default useLocalStorage;
