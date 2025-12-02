import React from 'react'
import 'animate.css';
import './contact.css'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
// Changed 
import {Menu,X,CircleUserRound} from "lucide-react"
// ----------------->

import { ToastContainer, toast } from 'react-toastify';

const Navbar_Landing = () => {
  const [hover, sethover] = useState(false)
  const [hover1, sethover1] = useState(false)
  const [hover2, sethover2] = useState(false)
  const [hover3, sethover3] = useState(false)
  // const [Focus, setFocus] = useState(false)
  const [hamBurger, sethamBurger] = useState(false)
  // const [userData, setuserData] = useState(false)
  const handleOpen = () => {
    sethamBurger(true)
  }

  const handleClose = () => {
    sethamBurger(false)
  }

  useEffect(() => {
    if (hamBurger) {
      document.body.classList.add('overflow-hidden'); // Add Tailwind class manually
    } else {
      document.body.classList.remove('overflow-hidden'); // Restore scroll
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [hamBurger]);



  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      /> */}
      <div className='hidden w-[95vw] mb-3 md:flex justify-between items-center'>
        <div className="logo flex justify-center items-center gap-2 w-[20%] sm:w-[21%] md:w-[25%] lg:w-[30%] ">
          <img src="/images/logo.webp?v=2?v=2" alt="logo" className='h-7 md:h-8 lg:h-9 xl:h-10 3xl:h-16 invert ' />
          <div className='w-full text-base sm:text-lg md:text-2xl xl:text-3xl 3xl:text-5xl font-bold cursor-pointer'><NavLink to='/'> Snip-Vault</NavLink></div>
        </div>
        <ul className='flex justify-end items-center px-2 sm:px-3 h-[5vh] w-[60%] md:w-[60%] lg:w-[60%] xl:w-[60%] 3xl:w-[80%] gap-6 md:gap-5 lg:gap-10  '>
          <NavLink to='/' className={`text-base sm:text-lg md:text-2xl xl:text-3xl 3xl:text-5xl font-semibold 2xl:font-bold hover:cursor-pointer ${hover3 ? 'animate__animated animate__headShake' : ''}`} onMouseEnter={() => sethover3(true)} onMouseLeave={() => sethover3(false)}>Home</NavLink>
          <NavLink to='/about_landing' className={`text-base sm:text-lg md:text-2xl xl:text-3xl 3xl:text-5xl font-semibold 2xl:font-bold hover:cursor-pointer ${hover1 ? 'animate__animated animate__headShake' : ''}`} onMouseEnter={() => sethover1(true)} onMouseLeave={() => sethover1(false)}>About us</NavLink>
          <NavLink to='/login' className={`text-base sm:text-lg md:text-2xl xl:text-3xl 3xl:text-5xl font-semibold 2xl:font-bold hover:cursor-pointer ${hover2 ? 'animate__animated animate__headShake' : ''}`} onMouseEnter={() => sethover2(true)} onMouseLeave={() => sethover2(false)}>Login</NavLink>
        </ul>
      </div>

      {/* For the mobile */}

      <div className='flex w-[100%] md:hidden justify-between items-center bg-black h-[30px] mb-3'>
        <div className="logo flex justify-center items-center gap-2 w-[60%] ">
          <img src="/images/logo.webp" alt="logo" className='h-7 invert ' />
          <div className='w-full text-base sm:text-lg font-bold cursor-pointer'><NavLink to='/'> Snip-Vault</NavLink></div>
        </div>
        <div onClick={handleOpen} className="hamburger w-[10%]">
          <Menu className='text-xl' />
        </div>
      </div>
      <div className="line bg-gray-500 w-[100%] h-[.8px] mt-2 3xl:mt-5 flex justify-center items-center"></div>

      <div className={`linkBox md:hidden flex justify-start items-center backdrop-blur-md bg-transparent h-screen overflow-hidden fixed   ${hamBurger ? 'transition-all -right-0 duration-200 ease-out' : ' transition-all -right-[1200px] duration-200 ease-in'} w-full -top-0 z-10 `}>
        <div className="contentLink flex justify-center rounded-sm items-center w-[80%] h-screen bg-black absolute right-0">
          <X onClick={handleClose} className='absolute top-0 left-0 m-2 text-2xl sm:text-3xl border-2 rounded-full' />
          <div className='flex justify-center items-center flex-col gap-3 w-full'>
            <div className="greet flex flex-col justify-center items-center gap-3 mb-2">
              <div className="userIcon border-2 rounded-full flex justify-center items-center p-2"><CircleUserRound width={60} height={60} /></div>
              <div className="greetText text-sm sm:text-base font-semibold font-serif truncate">Welcome Guest</div>
            </div>
            <div className="line bg-gray-500 w-[60%] sm:w-[80%] h-[.5px] sm:h-[1.5px] mb-3"></div>
            <div className="text-gray-200 center m-2 text-md sm:text-lg font-bold font-serif">Quick Access</div>
            <div className='flex justify-start flex-col items-center h-[70%] w-full gap-2'>
              <NavLink onClick={handleClose} to='/' className={`text-sm sm:text-base font-medium text-gray-300 hover:cursor-pointer ${hover1 ? 'animate__animated animate__headShake' : ''}`} >Home</NavLink>
              <NavLink onClick={handleClose} to='/about_landing' className={`text-sm sm:text-base font-medium text-gray-300 hover:cursor-pointer ${hover2 ? 'animate__animated animate__headShake' : ''}`} >About us</NavLink>
              <NavLink onClick={handleClose} to='/login' className={`text-sm sm:text-base font-medium text-gray-300 hover:cursor-pointer ${hover3 ? 'animate__animated animate__headShake' : ''}`} >Login</NavLink>
            </div>
            <div className="Para w-full flex justify-center items-center text-center mt-10"><i className='flex text-center font-sans w-[90%] justify-center items-center text-xs sm:text-base text-gray-400'>"Every link is engineered for quick navigation and zero friction. Minimal effort. Maximum control."</i></div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar_Landing;