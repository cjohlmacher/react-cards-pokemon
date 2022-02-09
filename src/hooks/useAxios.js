import axios from 'axios';
import {v4 as uuid } from 'uuid';
import { useState } from 'react';

// Hook to maintain array of responses from fetch requests.  Accepts optional params for url query string
//  useAxios('www.api.com/', ['sports','volleyball']) => retrieves data from www.api.com/sports/volleyball/
const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const fetchNew = async (param='') => {
        let url = baseUrl;
        if (param) { 
            url += `${param}/` 
        };
        const res = await axios.get(url);
        setData([...data, {...res.data, id: uuid() }]);
    };
    return [data, fetchNew];
};

export default useAxios;