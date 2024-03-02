import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import  {FiSearch} from 'react-icons/fi'
import  {IoMenu} from 'react-icons/io5'
import {IoIosWarning} from 'react-icons/io'
import { useState, useRef, useEffect } from 'react'
const Navbar = ({ locationProps }) => {
  const location = useLocation()
  let html = document.querySelector("html")
  let toggle = document.querySelector('.toggle')
  const [activeWork, setActiveWork] = useState(true);
  const [activePlayground, setActivePlayground] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeResume, setActiveResume] = useState(false);
  const [refreshBlendBar, setRefreshBlendBar] = useState(false)
  const [currentLocation, setCurrentLocation] = useState("")
  
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos+2) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  
  useEffect(() => {
    setCurrentLocation(location)
    if (locationProps.href.includes('about')) {
      //('about');
      setActiveAbout(true)
      setActiveWork(false)
      setActivePlayground(false)
      return
    }
    if (locationProps.href.includes('playground')) {
      //('playground active');
      setActivePlayground(true)
      setActiveAbout(false)
      setActiveWork(false)
      return
    }
    if (locationProps.href.includes('work')) {
      //('playground active');
     setActiveAbout(false)
      setActivePlayground(false)
      setActiveWork(true)
      return
    }

    else {
      setActiveAbout(false)
      setActivePlayground(false)
      setActiveWork(false)
      return
    }
  }, [location])

  const handleActiveAbout = () => {
    setActiveAbout(true)
    setActiveWork(false)
    setActivePlayground(false)
  }
  const handleActivePlayground = () => {
    setActiveAbout(false)
    setActiveWork(false)
    setActivePlayground(true)
  }
  const handleActiveWork = () => {
    setActiveAbout(false)
    setActiveWork(true)
    setActivePlayground(false)
  }

  return (
    <nav>
      <div className='px-6 flex justify-between mt-4 items-center'>
        <div className='text-primaryGreen font-medium'>
          <h1>Clear <span className='text-secondaryGreen'>Air</span></h1>
        </div>
        {/* desktop screen */}
        <div className='hidden md:flex items-center gap-6'>
          
            <Link>Home</Link>
            <Link>Pollution</Link>
            <Link>Air quality Data</Link>
            <Link>Resources</Link>
            <Link>Action</Link> 
          
        </div>
        {/* mobile screen */}
        <div className='flex  gap-3  items-center'>
          <FiSearch/>
          <IoMenu className='md:hidden text-primaryGreen text-xl'/>
          <div className='hidden md:flex items-center gap-3 px-2 py-1 rounded-lg bg-secondaryGreen'>
            <p className='text-white'>Report a Problem</p>
            <IoIosWarning className='text-primaryGreen'/>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
