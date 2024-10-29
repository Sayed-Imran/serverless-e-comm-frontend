'use client'
import React from 'react'
import './AntCarousel.scss';
import { Carousel } from 'antd';
function AntCarousel(props:any) {
  return (
    <div>
        <Carousel autoplay className='carousel_container'>
            {props.children}      
        </Carousel>
    </div>
  )
}

export default AntCarousel