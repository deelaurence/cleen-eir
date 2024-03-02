import React from 'react'
import conferenceRoom from '../../assets/conference-room.jpg'
import { IoIosArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom'
import unEnvironment from '../../assets/un-environment.png'
import usaEnvironment from '../../assets/usa-environment.png'

const Section6 = () => {
  return (
    <section className='md:px-16 px-0 flex  flex-col  items-center md:items-stretch'>
       <div className='md:h-[50vh]  w-full md:w-auto pt-8 md:pt-0 mt-9 md:mt-0 pb-8 md:pb-0 mb-24 md:mb-0 font-medium bg-neutral-100 md:bg-transparent md:font-semibold text-xl gap-8  flex flex-col items-center justify-center'>
        <p className='text-primaryGreen '>Our partners</p>
       <div className=' items-center flex gap-8 md:gap-24  '>
            <div><img className='h-16 md:h-36' src={unEnvironment} alt="" /></div>
            <div><img className='h-16 md:h-36' src={usaEnvironment} alt="" /></div>
       </div>
       </div>
       <div className=' md:h-[70vh] flex flex-col-reverse gap-24 items-center md:items-stretch  md:gap-0 md:flex-row'>
            <div className='h-full  flex items-center  justify-start w-[60vw] md:w-[50%]'>
            <div className='flex gap-2 md:gap-4 flex-col'>
                <h6 className='md:text-xl text-primaryGreen'>About us</h6>
                <h3 className='text-xl md:text-2xl font-semibold'>Discover our mastery</h3>
                <p className='text-sm md:text-base'>We are committed to fostering a healthier enviroment
                for all.
                </p>
                <Link className='flex items-center justify-center gap-2 bg-secondaryGreen text-white w-fit px-3 py-2 md:py-3 rounded-lg'>
                    <p className='text-sm md:text-base'>Learn more</p>
                    <IoIosArrowDropright/>
                </Link>
            </div>
            </div>
            <div className='h-full rounded-2xl md:rounded-none flex  md:justify-end bg-secondaryGreen w-[60vw] md:w-[50%]'>
                <div className='hidden md:block h-full w-[9%] bg-white  opacity-20 text-8xl font-semibold'>Clean air</div>
                <img className='h-full rounded-2xl md:rounded-none' src={conferenceRoom} alt="" />
            </div>
            
       </div>
    </section>
  )
}

export default Section6