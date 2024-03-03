import React from 'react'
import { Link } from 'react-router-dom'
import greenCaution from '../../assets/green-caution.png'


const section8 = () => {
  return (
    <section className='py-24 md:py-0 md:h-screen w-full flex flex-row-reverse md:flex-row md:px-24 justify-around items-center'>
       <div className='flex w-[50%] items-center   justify-between'>
            <div className='flex flex-col items-start md:items-stretch md:text-2xl gap-6 md:gap-16 '>
                <p>Found any hazardous <br />
                    pollution in your <br />
                    <span className='font-semibold'> community?</span></p>
                <Link className='p-2  text-sm md:text-base md:p-4 rounded-xl text-white bg-secondaryGreen' >Report a problem</Link>
            </div>
        </div> 
       <div className='w-[40%] '>
            <img className='' src={greenCaution} alt="" />
        </div> 
    </section>
  )
}

export default section8