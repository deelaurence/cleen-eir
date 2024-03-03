import React from 'react'
import greenField from '../../assets/green-field.jpg'
import { IoIosArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <section className='mt-24 md:mt-32 flex flex-col md:flex-row  md:h-screen w-screen'>
        <div className='w-[70%] md:w-[60%] flex items-center  md:h-full'>
            <img src={greenField} alt="" />
        </div>
        <div className='relative w-screen md:w-[45%] md:h-full h-[80vw] text-white'>
            <div className='absolute rounded-xl md:rounded-none flex flex-col justify-center px-6 md:px-16 h-[50vw] md:h-[60%] right-24 md:-left-12 bg-primaryGreen -top-12  w-[50vw] md:w-[80%]'> 
                <h3>"Why Clear Air?</h3>
                <h2 className='text-[15px] md:text-3xl text-semibold'>Transforming Your Environment for Better Living."</h2>
            </div>
            <div className='flex px-6 md:px-16  justify-center rounded-tl-xl rounded-bl-xl md:rounded-none flex-col absolute h-[50vw] md:h-[60%] right-0 bg-secondaryGreen  bottom-0 w-[50vw] md:w-[80%]'> 
                <p className=' text-[9px] md:text-xl'>"Explore the Clear Air advantage for a healthier, happier life. Our solutions create cleaner environments, promoting vitality and well-being. Breathe easier with our expertise."          </p>
                <div className="mt-6 px-4 py-1 rounded-lg bg-primaryGreen text-white  flex items-center gap-2 w-fit">
                <Link className="text-xs md:text-base">Read More</Link>
                <IoIosArrowDropright/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Section3