import React from "react"
import greenField from '../../assets/green-field2.jpg'
import ShadowBox from "../shadowBox"
import { Link } from "react-router-dom"
import { IoIosArrowDropright } from "react-icons/io"
import seperator from "./seperator"


const ContentOne = () => {  
  return (
    <>
      <div className=" flex flex-col items-center h-full w-full justify-center">
        <h3 className="text-2xl md:text-3xl font-medium text-white">
          "Breathe Clean.
          <br />
          Live Healthy."
        </h3>
        <div className="mt-6 text-xs md:text-base px-4 py-1 rounded-lg bg-secondaryGreen text-white  flex items-center gap-2 ">
        <Link className="  ">Check Air Quality Index</Link>
        <IoIosArrowDropright/>
        </div>
      </div>
      
    </>
  )
}

const Section1 = () => {
    
    return (
      <>
        <section className='px-6 mt-24'>
          <h1 className='text-primaryGreen font-medium w-3/4 text-xl md:text-3xl'>
                "Experience the transformative power 
                of clean air with ClearAir &mdash; 
                your trusted source for air 
                quality insights,
                solutions, and a healthier tomorrow"      
          </h1>
          <div className="  w-screen mt-32 md:mt-12 justify-end relative flex">
            
            <img className="w-3/4 rounded-2xl md:rounded-none" src={greenField} alt="" />
            {/* desktop screen */}
            <div className="  absolute hidden md:block h-1/2 left-[2rem]  -translate-y-1/2 top-1/2">
              <ShadowBox content={<ContentOne/>} boxHeight='h-72' boxWidth="w-[50vw]" boxColor="bg-primaryGreen" shadowColor="bg-secondaryGreen"/>
            </div>
            {/* mobile screen */}
            <div className="absolute md:hidden h-1/2 left-[2rem]  -translate-y-1/2 bottom-1/2">
              <ShadowBox content={<ContentOne/>} boxHeight='h-56' boxWidth="w-56" boxColor="bg-primaryGreen" shadowColor="bg-secondaryGreen"/>
            </div>

          </div>
        </section>
      </>
    )
  }
  export default Section1