import React from 'react'
import drainage from '../../assets/drainage.jpg' 
import underwater from '../../assets/underwater.jpg' 
import { IoIosArrowDropright } from "react-icons/io"
import { Link } from 'react-router-dom'


const content=[{
    img:drainage,
    title:'"New Study Reveals Alarming Air Pollution Levels in Urban Areas"',
    date:'January 8, 2024',
    info:'A groundbreaking study uncovers concerning levels of air pollution in urban areas, sparking urgent calls for action to protect public health and the environment. Read more...'

},
{
    img:underwater,
    title:'"Tech Innovations Revolutionize Air Quality Monitoring"',
    date:'Febuary 7, 2024 ',
    info:' Advancements in air quality monitoring technology, such as low-cost sensors and data analytics platforms, are transforming the way we track and manage air pollution in urban areas. Read more...'

}]

const sideContent=[{
    title:'Health Impacts of Air Pollution: Experts Warn of Growing Concerns',
    date:'January 13, 2024',

},
    {
    title:'Countries Join Forces to Combat Air Pollution',
    date:'January 23, 2024 ',

},
    {
    title:'Companies Commit to Reduce Carbon Emissions Impacts of Air Pollution: Experts Warn of Growing Concerns',
    date:'January 7, 2024',

}]


const Section7 = () => {
  return (
    <section className='md:px-24 px-16 mt-32 pt-8 pb-12 flex flex-col text-white bg-primaryGreen  w-full'>
        <div className='flex h-[20%] mb-6 md:mb-0 justify-center items-center'>
            <div className='flex gap-2 items-center flex-col '>
                <h6 className='text-xl '>Latest News</h6>
                <h3 className='text-2xl font-medium md:font-semibold text-center'>Most Popular Articles</h3>
                <p className='text-center hidden md:block'>We are committed to fostering a healthier  <br /> enviroment
                for all.
                </p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:h-[80%]'>
            <div className='h-full md:w-[65%] flex flex-col md:flex-row gap-6 '>
            {content.map((single)=>{
                return(              
                <div className='flex flex-col gap-2'>
                    <div className='h-[40%] rounded-xl mb-4 overflow-hidden'>
                        <img className='object-cover h-full w-full' src={single.img} alt="" />
                    </div>
                    <h3 className='text-2xl font-medium'>{single.title}</h3>
                    <p className='font-semibold'>{single.date}</p>
                    <p className='hidden md:block text-sm'>{single.info}</p>
                </div>
                )
            })}
            </div>
            <div className=' md:w-[35%] flex flex-col pt-8 md:p-8 gap-6'>
            {sideContent.map((single)=>{
                return(              
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-medium'>{single.title}</h3>
                    <p className='opacity-90'>{single.date}</p>
                </div>
                )
            })}
            <Link className='flex items-center justify-center gap-2 bg-secondaryGreen text-white w-fit px-5 py-3 rounded-lg'>
                    <p>Read More</p>
                    <IoIosArrowDropright/>
            </Link>

            </div>
        </div>
    </section>
  )
}

export default Section7