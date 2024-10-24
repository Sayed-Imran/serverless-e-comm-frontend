'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.scss'
function Loader() {
    const isLoading = useSelector((state:any) => state.loader.isLoading);
    return isLoading ?(
        <div className='loaderContainer'>
           <div className="loader"></div>
        </div>
    ) : null
}

export default Loader