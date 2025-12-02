import React from 'react'
import './footer.css'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="line bg-gray-500 h-[.5px] w-[98%] m-5 mb-2 xl:mb-5 2xl:mb-6 mx-auto "></div>
            <div className='hidden sm:flex flex-col md:flex-col lg:flex-row md:justify-between lg:justify-center items-center md:w-[95vw] lg:w-[95vw] mx-auto mt-7 lg:mx-1 lg:my-4 xl:m-0 h-[20vh] md:h-[10vh] lg:h-[12vh]'>
                <div className="left_box flex justify-center items-start sm:items-center md:items-start flex-col sm:flex-row md:flex-col h-1/2 lg:h-1/3 xl:h-1/2 gap-0 lg:gap-4 xl:gap-4 md:h-full w-full sm:w-[50%] lg:w-[28%] xl:w-[26%] md:mr-2 lg:mr-5 mb-3 sm:mb-1 md:mb-3  lg:mb-0">
                    <p className='w-full sm:w-1/2 md:w-full font-bold text-lg md:text-lg xl:text-2xl text-center h-1/3 md:mb-1 lg:mb-0 flex justify-center items-center '>Quick Access</p>
                    <div className="search_item flex justify-around md:justify-around md:flex-row lg:flex-col w-4/5 md:w-full items-center gap-6 sm:gap-2 md:gap-6 lg:gap-1 xl:gap-2 md:h-1/2 m-auto mt-0 xl:mt-2 ">
                        <ul className='w-3/5 sm:w-full lg:w-full text-base sm:text-lg xl:text-xl font-mono flex justify-end sm:justify-center lg:justify-center items-center h-full gap-4 sm:gap-5 lg:gap-7 '>
                            <NavLink onClick={handleClick} to='/' className='text-gray-400 2xl:hover:text-blue-500 cursor-pointer xl:hover:underline w-fit text-center'>Home</NavLink>
                            <NavLink onClick={handleClick} to='/about_landing' className='text-gray-400 2xl:hover:text-blue-500 cursor-pointer xl:hover:underline w-fit text-center'>About us</NavLink>
                            <NavLink onClick={handleClick} to='/login' className='text-gray-400 xl:hover:text-blue-500 cursor-pointer 2xl:hover:underline w-fit text-center '>Login</NavLink>
                        </ul>
                        
                    </div>
                </div>
                <div className="main_content flex justify-center items-center flex-col w-full md:w-full lg:w-[65%] h-1/2 sm:h-full  ">
                    <div className="logo flex justify-center items-center gap-2  ">
                        <img  src="/images/logo.webp?v=2" alt="logo" className='h-7 md:h-6 lg:h-8 xl:h-10 invert cursor-pointer' />
                        <div className='w-full text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer flex justify-center items-center'>Snip-Vault</div>
                    </div>
                    <div className="info">
                        <p className=' text-base md:text-lg xl:text-xl font-semibold font-sans mb-0 xl:m-0 text-center'>This is for the help of developer's -  <span className="imp text-lg md:text-lg xl:text-2xl">Copywrite &copy;{year} SunilPy - Dev's</span></p>
                    </div>
                </div>
                <div className="right_box flex justify-center md:items-center xl:items-center md:h-full h-1/4 w-full md:w-full lg:w-1/5 xl:w-[23%] lg:ml-2 py-1 ">
                    <i className='text-sm md:text-base md:m-1 lg:text-sm xl:text-base 2xl:text-lg md:font-medium lg:font-bold text-gray-400'>"Not all code is meant to be forgotten — some is meant to be stored, shared, and reused"</i>
                </div>
            </div>

            {/* For the mobile */}
            <div className='flex sm:hidden flex-col justify-center items-center w-full h-[30vh]'>
                <div className="main_content flex justify-center items-center flex-col w-full h-1/2">
                    <div className="logo flex justify-center items-center gap-2  ">
                        <img src="/images/logo.webp?v=2" alt="logo" className='h-5 invert cursor-pointer' />
                        <div className='w-full text-lg font-semibold cursor-pointer flex justify-center items-center'>Snip-Vault</div>
                    </div>
                    <div className="info flex justify-center items-center flex-col sm:flex-row gap-0 sm:gap-2 w-full">
                        <p className='text-sm font-medium font-sans'>This is for the help of developer's </p>
                        <span className="imp text-base">Copywrite &copy;{year} SunilPy - Dev's</span>
                    </div>
                </div>
                <div className="left_box flex flex-col justify-center items-start h-1/4 w-full m-auto my-2 sm:my-1">
                    <p className='w-full font-bold text-lg text-center h-1/2 mb-1 '>Quick Access</p>
                    <div className="search_item flex justify-center w-full items-center h-1/2 ">

                        <ul className='w-full text-xs font-mono flex justify-center items-center h-full gap-5 '>
                            <NavLink onClick={handleClick} to='/' className='text-gray-400 hover:text-blue-500 cursor-pointer hover:underline w-fit text-center'>Home</NavLink>
                            <NavLink onClick={handleClick} to='/about_landing' className='text-gray-400 hover:text-blue-500 cursor-pointer hover:underline w-fit text-center'>About us</NavLink>
                            <NavLink onClick={handleClick} to='/login' className='text-gray-400 hover:text-blue-500 cursor-pointer hover:underline w-fit text-center '>Login</NavLink>
                        </ul>
                    </div>
                </div>
                <div className="right_box flex justify-center items-center h-1/4 w-full ">
                    <i className='text-xs font-semiboldbold text-gray-400 w-full text-center'>"Not all code is meant to be forgotten — some is meant to be stored, shared, and reused"</i>
                </div>
            </div >
        </>
    )
}

export default Footer