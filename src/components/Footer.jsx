import { useLocation } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import circles from '../assets/circles.png'
import { IoPaperPlaneSharp } from 'react-icons/io5'
const Footer = () => {


  return (
    
    <footer
      className="md:h-[80vh] text-white flex flex-col bg-primaryGreen pt-16 gap-16 pb-44 items-center justify-between"
    >
      <div className='flex items-center justify-between px-3 md:px-16 rounded-xl text-sm font-semibold md:text-2xl bg-secondaryGreen py-2 w-[90%] md:w-4/5' >
        <p>Want to be a Change Maker?</p>
        <Link className='bg-primaryGreen py-1 px-3 md:py-4 md:px-8 rounded-lg flex items-center gap-4'>Join <IoPaperPlaneSharp/> </Link>
      </div>
      <div className='gap-12 md:gap-0 flex flex-col md:flex-row justify-between w-[90%] md:w-4/5 '>
        <div className='flex flex-col w-[60%] md:w-[20%] gap-2 '>
        <h1>Clear <span className='text-secondaryGreen'>Air</span></h1>
        <p className='text-sm'>We provide educational
          and health information on
          environmental air pollution</p>
        <div>
          <img className='w-[50%]' src={circles} alt="" />  
        </div>  
        </div>
        <div className='flex flex-wrap gap-12'>
          <div className='flex ' >
            <div className=' flex flex-col text-xs gap-[4px]'>
              <h3 className='font-medium pb-4 text-lg'>Quick Links</h3>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Air pollution</Link>
              <Link>Health tips</Link>
              <Link>Change maker</Link>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className='flex ' >
            <div className=' flex flex-col gap-[4px] text-xs'>
              <h3 className='font-medium pb-4 text-lg'>Resources</h3>
              <Link>Blog</Link>
              <Link>Report</Link>
              <Link>Newsletter</Link>
              
            </div>
            <div></div>
            <div></div>
          </div>
          <div className='flex ' >
            <div className=' flex flex-col gap-[4px] text-xs'>
              <h3 className='font-medium pb-4 text-lg'>Contact</h3>
              <Link>Adeola Odeku Street,</Link>
              <Link>Victoria island, Lagos</Link>
              <Link>+234 7000045623</Link>
              <Link>+234 800800476</Link>
            
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      

    </footer>

  )
}

export default Footer
