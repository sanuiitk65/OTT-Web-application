import React from 'react';
import axios from 'axios';

function Baseurl() {

    return (
        <></>
    )
}

const mainAxios = axios.create({
    baseURL: 'http://localhost:3000'
    
})



export default Baseurl;

export { mainAxios};