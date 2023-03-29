import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [localStorageValue, setLocalStorageValue] = useState(
        () => getLocalStorageValue(key, initialValue)
    );

    
    
    const setValue = (value) => {
        //checks if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value;
        //set to state
        setLocalStorageValue(value);
        //set to localStorage
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };

  return [localStorageValue, setValue];
}

const getLocalStorageValue = (key, initialValue) => {
    const itemFromStorage = localStorage.getItem(key);
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
};

export default useLocalStorage