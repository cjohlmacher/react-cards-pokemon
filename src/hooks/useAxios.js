import axios from 'axios';
import {v4 as uuid } from 'uuid';
import useLocalStorage from './useLocalStorage.js';

// Hook to maintain array of responses from fetch requests.  Accepts optional formatting function for response data
const useAxios = (baseUrl, key, formattingFunc=(d)=>{return d}) => {
    const [data, setData] = useLocalStorage(key,[]);
    const fetchNew = async (param='') => {
        let url = baseUrl;
        if (param) { 
            url += `${param}/` 
        };
        const res = await axios.get(url);
        const formattedData = formattingFunc(res.data);
        setData([...data, {...formattedData, id: uuid() }]);
    };
    const clearData = () => {
        setData([]);
    };
    return [data, fetchNew, clearData];
};

export default useAxios;