import React from 'react';
import axios from 'axios';

function Baseurl() {

    return (
        <></>
    )
}

const mainAxios = axios.create({
    baseURL: 'https://ott-web-apps.onrender.com/api'
    //baseURL: 'http://localhost:3000/api'
    
})



export default Baseurl;

export { mainAxios};