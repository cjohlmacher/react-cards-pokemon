import { useEffect, useState } from 'react';

const useLocalStorage = (key,initialValue=[]) => {
    let value;
    const [state, setState] = useState(()=>{
        const storage = window.localStorage.getItem(key);
        value = storage ? JSON.parse(storage) : initialValue;
        
        return value;
    });
    useEffect( () => {
        window.localStorage.setItem(key,JSON.stringify(state));
    }, [key,state])
    return [state, setState];
};

export default useLocalStorage;