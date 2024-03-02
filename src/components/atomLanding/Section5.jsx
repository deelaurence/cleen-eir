import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slum from '../../assets/slum.jpg'
import slum2 from '../../assets/slum2.jpg'
import rowdyStreet from '../../assets/rowdy-street.jpg'
import mistyKeke from '../../assets/misty-keke.jpg'
import burningRefuse from '../../assets/burning-refuse.jpg'




import Seperator from './seperator';
// function ImageComponent() {
    
  
//     return <img  src="image.jpg" alt="My Image" />;
//   }

const Section5 = ({sliderConfig}) => {
    
    var settings = sliderConfig
    
    return (
    <section className='mt-20 md:mt-44  relative'>
        <Slider className='' {...settings}>
            <div className=' p-6 mt-auto' >
                <div className='relative  overflow-hidden'>
                    <div className='p-4 md:p-8 pr-12 absolute text-white flex items-end md:font-medium text-sm md:text-2xl bg-gradient-to-t from-neutral-700 via-transparent to-transparent h-full w-full '>
                        Outdoor air pollution contributes to an estimated 4.2 million premature deaths worldwide every year &mdash; WHO.
                    </div>
                    <img  className='' src={burningRefuse} alt="" />
                </div>
            </div>
            <div className=' p-6 mt-auto ' >
                <div className='relative   overflow-hidden'>
                    <div className='p-4 md:p-8 pr-12 absolute text-white flex items-end md:font-medium text-sm md:text-2xl bg-gradient-to-t from-neutral-700 via-transparent to-transparent h-full w-full '>
                    Experience the melodic blend of industrial emissions, prompting a plea for sustainable production techniques.
                    </div>
                    <img  className='' src={slum2} alt="" />
                </div>
            </div>
           
            <div className=' p-6 mt-auto ' >
                <div className='relative   overflow-hidden'>
                    <div className='p-4 md:p-8 pr-12 absolute text-white flex items-end md:font-medium text-sm md:text-2xl bg-gradient-to-t from-neutral-700 via-transparent to-transparent h-full w-full '>
                    Fine particulate matter (PM2.5) is a significant component of air pollution and is linked to respiratory diseases.
                    </div>
                    <img  className='' src={slum} alt="" />
                </div>
            </div>
            <div className=' p-6 mt-auto ' >
                <div className='relative   overflow-hidden'>
                    <div className='p-4 md:p-8 pr-12 absolute text-white flex items-end md:font-medium text-sm md:text-2xl bg-gradient-to-t from-neutral-700 via-transparent to-transparent h-full w-full '>
                        Witness the industrial symphony of emmisions &mdash; a call for cleaner production practices.
                    </div>
                    <img  className='' src={mistyKeke} alt="" />
                </div>
            </div>
            
      
    </Slider>
    <div className=' absolute h-[30px] bg-white bottom-0 left-0 w-full'></div>
    {/* <  Seperator margin={false} /> */}
    </section>
  )
}

export default Section5