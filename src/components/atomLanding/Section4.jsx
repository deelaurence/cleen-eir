import React from 'react'
import { IoIosArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom'
import ShadowBox from '../shadowBox'
import Seperator from './seperator'
import poleDevice from '../../assets/pole-device.jpg'
import community from '../../assets/community.jpg'
import windMill from '../../assets/windmill.jpg'


const ContentOne = () => {  
    return (
      <>
        <div className=" flex text-white   h-full w-full justify-around">
          <img className='max-w-[50%]' src={poleDevice} alt="" />
          <div className='p-2 pl-4 md:p-6'>
            <h3 className='text-sm md:text-2xl mb-3'>Air Quality Monitoring</h3>
            <ul className='pl-5 list-disc flex flex-col gap-[2px] text-[8px] md:text-sm'>
                <li>Keep track of air pollutant levels in real-time</li>
                <li>Provide accurate data for informed decision-making</li>
                <li>Ensure compliance with air quality regulations</li>
            </ul>
          </div>
        </div>
      </>
    )
}
const ContentTwo = () => {  
    return (
      <>
        <div className=" flex text-white   h-full w-full justify-around">
          <img className='max-w-[50%]' src={windMill} alt="" />
          <div className='p-2 pl-4 md:p-6'>
            <h3 className='text-sm md:text-2xl mb-3'>Consulting Services</h3>
            <ul className='pl-5 list-disc flex flex-col gap-[2px] text-[8px] md:text-sm'>
                <li>Expert guidance on air pollution mitigation strategies</li>
                <li>Regulatory compliance and sustainable practices</li>
                <li>Tailored solutions for governmens, Industries and organisations</li>
            </ul>
          </div>
        </div>
      </>
    )
}
const ContentThree = () => {  
    return (
      <>
        <div className=" flex text-white   h-full w-full justify-around">
          <img className='max-w-[50%]' src={community} alt="" />
          <div className='p-2 pl-4 md:p-6'>
            <h3 className='text-sm md:text-2xl mb-3'>Community Engagement</h3>
            <ul className='pl-5 list-disc flex flex-col gap-[2px] text-[8px] md:text-sm'>
                <li>Patner with local communities to address air polution issues</li>
                <li>Organize outreach, events and educational programs</li>
                <li>Foster collaborations and grassroots initiatives for cleaner air</li>
            </ul>
          </div>
        </div>
      </>
    )
}

const Section4 = () => {
  return (
    <section className='mt-14 md:mt-[24rem] relative '>
        <div className='md:mb-44 flex items-center p-6 md:p-0 border-[18px]  border-neutral-300  md:h-[130vh] w-[90vw] md:w-[55vw] ml-[5vw] md:ml-16'>
            <div className=' md:ml-16 flex gap-2 p-12 md:p-0 bg-neutral-100 md:bg-transparent flex-col'>
                <h6 className='text-sm md:text-xl text-primaryGreen'>Services</h6>
                <h3 className=' md:text-2xl font-semibold'>What we Offer</h3>
                <p className='text-xs md:text-base ' >We are passionate for enviromental<br /> 
                stewardship and a deep commitment<br/>
                to creating a healthier planet for 
                <br /> future generations.</p>
                <Link className='flex text-sm sm:text-base items-center justify-center gap-2 bg-primaryGreen text-white w-fit px-2 py-1 rounded-lg'>
                    <p>Explore</p>
                    <IoIosArrowDropright/>
                </Link>
            </div>
        </div> 
        {/* desktop screen */}
        <div className='hidden justify-around md:flex flex-col gap-14  absolute h-[60vh] md:h-[160vh] w-[60vw] right-0 -top-20'>
            <ShadowBox content={<ContentOne/>} ml='ml-14' boxHeight='h-72' boxWidth="w-[40vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentTwo/>} ml='ml-32' boxHeight='h-72' boxWidth="w-[40vw]" boxColor="bg-secondaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentThree/>} ml='ml-16' boxHeight='h-72' boxWidth="w-[40vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
        </div>
        {/* mobile screen   */}
        <div className='justify-around md:hidden flex flex-col gap-8  w-[60vw] '>
            <ShadowBox content={<ContentOne/>} ml='ml-10' boxHeight='h-44' boxWidth="w-[80vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentTwo/>} ml='ml-16' boxHeight='h-44' boxWidth="w-[80vw]" boxColor="bg-secondaryGreen" shadowColor="bg-neutral-500"/>
            <ShadowBox content={<ContentThree/>} ml='ml-16' boxHeight='h-44' boxWidth="w-[80vw]" boxColor="bg-primaryGreen" shadowColor="bg-neutral-500"/>
        </div>       
        <Seperator/>
    </section>
  )
}

export default Section4