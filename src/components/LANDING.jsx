import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import {TfiArrowCircleRight} from 'react-icons/tfi'
import {BsArrowUpRightCircle} from 'react-icons/bs'
import Seperator from './atomLanding/seperator';
import Section1 from './atomLanding/section1';
import Section2 from './atomLanding/Section2';
import Section3 from './atomLanding/Section3';
import Section4 from './atomLanding/Section4';
import Section5 from './atomLanding/Section5';
import Section6 from './atomLanding/Section6';
import Slides from './atomLanding/slides';
import Section7 from './atomLanding/Section7';
import Section8 from './atomLanding/section8';
const LANDING = () => {
  // const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const sliderConfig={
    dots: true,
    
    infinite: true,
    speed: 2000,
    // fade:true,
    autoplay:true,
    // adaptiveHeight:true,
    // slidesToShow: 1,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const sliderConfigMobile={
    dots: true,
    
    infinite: true,
    speed: 2000,
    // fade:true,
    autoplay:true,
    // adaptiveHeight:true,
    // slidesToShow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <Section1/>
        <Seperator/>
        <Section2/>
        <Section3/>
        <Section4/>
        <div className='hidden md:block'>
        < Section5 sliderConfig={sliderConfig}/>
        </div>
        <div className='md:hidden'>
        < Section5 sliderConfig={sliderConfigMobile}/>
        </div>
        <Section6/>
        <Section7/>
        <Section8/>
        {/* <Slides/> */}
        {/* <Slides/> */}
      </section>
      
    </>
  )
}

export default LANDING
