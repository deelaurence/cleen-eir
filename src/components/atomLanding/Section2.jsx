import React from 'react'
import { IoIosArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom'
import ShadowBox from '../shadowBox'
import Seperator from './seperator'

const ContentOne = () => {  
    return (
      <>
        <div className=" p-6 flex text-white flex-col text-sm md:text-base h-full w-full justify-around">
          <p>Particulate Matter (PM):</p>
          <p>from construction and vehicle emissions harms health and the environment. Reduce PM by avoiding burning, maintaining vehicles, and adopting solar energy.</p>
        </div>
        
      </>
    )
}
const ContentTwo = () => {  
    return (
      <>
        <div className="p-6 flex text-white flex-col  h-full w-full text-sm md:text-base justify-around">
          <p>Waste Pollution:</p>
          <p>Human waste, when not managed properly, harms the environment. Main cause: poor waste management. Adopt 3Rs - Reduce, Reuse, Recycle for a solution.</p>
        </div>
        
      </>
    )
}
const ContentThree = () => {  
    return (
      <>
        <div className="p-6 flex text-white flex-col  h-full w-full text-sm md:text-base justify-around">
          <p>Ammonia Pollution:</p>
          <p>NH3 from agricul industry, and vehicles causes air pollution
            Reduce emissions with efficient produ advanced tech, and precision farming.</p>
        </div>
        
      </>
    )
}


const Section2 = () => {
  return (
    <section className='mt-64 relative '>
        <div className='md:mb-44  flex items-center  border-[18px] border-l-0 border-neutral-300  h-[60vh] md:h-[80vh] w-[80vw] md:w-[70vw]'>
            <div className='ml-8 md:ml-16  flex gap-4 flex-col'>
                <h6 className='text-xl text-primaryGreen'> Air Pollution</h6>
                <p>Discover the key pollutants <br /> 
                affecting air quality and learn
                <br /> effective strategies for reduction.</p>
                <Link className='flex items-center justify-center gap-2 bg-primaryGreen text-white w-fit px-2 py-1 rounded-lg'>
                    <p>Explore</p>
                    <IoIosArrowDropright/>
                </Link>
            </div>
        </div>
        {/* desktop screen  */}
        <div className='hidden justify-around md:flex flex-col gap-24 absolute h-[70vh] md:h-screen w-[60vw] right-0 -top-20'>
            <ShadowBox content={<ContentOne/>} ml='ml-14' boxHeight='h-44' boxWidth="w-[50vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentTwo/>}  boxHeight='h-44' boxWidth="w-[50vw]" boxColor="bg-secondaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentThree/>} ml='ml-16' boxHeight='h-44' boxWidth="w-[50vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
        </div>               
        {/* mobile screen */}
        <div className='md:hidden justify-around flex flex-col gap-12 w-screen md:h-screen  right-0 -bottom-[50vh]'>
            <ShadowBox content={<ContentOne/>} ml='ml-12' boxHeight='h-44' boxWidth="w-[85vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentTwo/>} ml='ml-6' boxHeight='h-44' boxWidth="w-[85vw]" boxColor="bg-secondaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentThree/>} ml='ml-12' boxHeight='h-44' boxWidth="w-[85vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
        </div>        
        <Seperator/>
    </section>
  )
}

export default Section2