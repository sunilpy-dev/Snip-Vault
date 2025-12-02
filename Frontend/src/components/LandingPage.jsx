import { React, useState } from 'react'
import './landingpage.css'

import { NavLink } from "react-router-dom";

// Changed
import {CircleArrowRight,LogIn,Save,View,MonitorSmartphone,SquareMenu} from "lucide-react";
// ------------------>

const LandingPage = () => {
  const [mouseOver, setmouseOver] = useState(false)
  function handleMouseEnter() {
    setmouseOver(true)
  }
  function handleMouseLeave() {
    setmouseOver(false)
  }
  return (
    <>
      <div className='min-h-screen'>
        <div className="header h-[20%] w-full flex flex-col md:flex-row items-center justify-around p-2 sm:p-10">
          <div className="leftHeading w-full md:w-[80%] lg:w-[60%] pt-5 md:p-10 flex justify-center sm:justify-start items-center sm:items-start flex-col gap-2 sm:gap-5">
            <p className='text-xs sm:text-base md:text-lg lg:text-xl suse-mono'>Store, Organize, and Access Your Code Anywhere</p>
            <p className='text-2xl sm:text-3xl md:text-xl lg:text-3xl 2xl:text-3xl font-mono font-bold  w-full flex flex-row xl:flex-col items-center xl:items-start justify-center sm:justify-start gap-3 xl:gap-0'>Welcome to <span className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl baloo-2 font-semibold xl:w-full brand_text">Snip-Vault</span></p>
            <p className='text-sm sm:text-base lg:text-lg xl:text-xl momo-trust-display-regular py-2 px-5 sm:px-0 sm:py-0'>Snip-Vault is your personal cloud for code snippets. Save your code once, log in from any device, and get instant access whenever you need it , no more lost snippets or scattered files.</p>
          </div>
          <div className="image m-auto w-[60%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[35%] 2xl:w-[30%] h-[10%] sm:h-[40%] "><img className='h-full w-full' fetchPriority='high' src="/images/user.jpg?v=2" alt="main_image" /></div>
        </div>

        <div className="tagLine text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-serif mx-auto text-center w-full mt-20 sm:mt-10  ">Multilanguage Saving</div>

        <div className="carausoal w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-2 mb-20 sm:mb-10 border-y-2 border-gray-800 p-1 xl:p-5">
          <div className="track">
            {/* ORIGINAL SET */}
            <div className="group p-1 xl:p-10">
              <div className="card"><img src="/icons/react-native.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/python.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/java.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/javascript.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/html.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/css.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/typescript.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/tailwind.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/flutter.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/text.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/node-js.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
            </div>

            {/* DUPLICATE SET */}
            <div className="group p-1 xl:p-10">
              <div className="card"><img src="/icons/react-native.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/python.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/java.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/javascript.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/html.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/css.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/typescript.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/tailwind.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/flutter.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/text.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
              <div className="card"><img src="/icons/node-js.svg" className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 invert"  /></div>
            </div>

          </div>
        </div>

        <div className="m-auto p-2 sm:p-10 lg:p-2 xl:p-10 w-[80%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] flex flex-col md:flex-row justify-between items-center ">
          <div className=' w-[90%] sm:w-[90%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-[50%] md:h-[45%] lg:h-[50%] xl:h-[45%] relative'>
            <img className='h-full w-full' src="/images/Heading.jpg?v=2" alt="second_heading" />
            <div className="absolute top-0 right-0 autoRotate">
              <div className="animate_border rounded-full p-[4px] sm:p-[6px]">
                <div className="bg-white text-black w-14 sm:w-16 md:w-14 lg:w-16 xl:w-20 h-14 sm:h-16 md:h-14 lg:h-16 xl:h-20 p-0 sm:p-4 rounded-full font-bold md:font-semibold lg:font-bold text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col text-center justify-center items-center">
                  <p>Lets</p>  <p className='rotate-180 inline-block'>GO</p>
                </div>
              </div>
            </div>

          </div>
          <div className="info w-full md:w-[50%] h-full flex flex-col pt-5 px-0 xl:p-2 justify-center items-start ">
            <p className='font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl baloo-2 m-1 sm:m-4'>
              CODE SECURED , IDEAS PRESERVED <span className='gradientChange'>& INNOVATION UNLOCKED</span>
            </p>

            <p className=' text-sm sm:text-base xl:text-lg mx-0 sm:mx-4 mt-3 text-justify sm:text-left sm:mt-2 font-serif font-semibold'>
              Snip-Vault brings together a seamless platform where your snippets stay safe,
              organized, and instantly accessible with just a login - no stress, no limits.
            </p>

            <NavLink to="/login" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`hidden md:flex text-black px-4 py-2 mt-14 rounded-lg text-lg font-mono font-bold ml-4 m-2 xl:hover:scale-110 transition-all scale-100  justify-center items-center gap-2 cursor-pointer w-[25%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[25%] ${mouseOver ? 'classChange' : 'classNoChange'}`}>
              EXPLORE <CircleArrowRight className={`w-6 h-6  ${mouseOver ? 'leftMove' : 'noMove'}`} />
            </NavLink>

            {/* For mobile */}
            <NavLink to="/login" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-black px-4 py-2 mt-8 sm:mt-14 rounded-xl md:rounded-lg text-base md:text-lg font-mono font-bold sm:ml-4 sm:m-2 transition-all scale-100 flex md:hidden justify-center items-center gap-2 cursor-pointer w-full sm:w-[90%] md:w-[25%] ${mouseOver ? 'classChange' : 'classNoChange'}`}>
              EXPLORE <CircleArrowRight className={` w-5 md:w-6 h-5 md:h-6 `} />
            </NavLink>

          </div>
        </div>

        <div className='flex-col justify-center items-center m-auto w-full text-center mt-20'>
          <div className='text-base sm:text-2xl md:text-3xl xl:text-4xl font-serif font-bold p-2 shadowText'>Quick Overview</div>
        </div>

        <div className="w-full h-[50%] flex justify-center items-center p-1 sm:p-4 relative mt-2 mb-10">

          {/* Middle Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full mx-2 md:mx-0 w-[2px] sm:w-[3px] md:w-[4px] bg-green-200 transform -translate-x-1/2"></div>


          <div className="container w-full lg:w-[68%] m-auto flex-col justify-center items-center">

            <div className="box-1 w-full flex justify-around items-center gap-3 sm:gap-7 p-2 sm:my-5 fadeUP">
              <div className="img w-1/2 flex justify-center items-center ">
                <LogIn className='w-[50px] sm:w-[100px] md:w-[110px] lg:w-[140px] xl:w-[160px] h-[50px] sm:h-[100px] md:h-[110px] lg:h-[140px] xl:h-[160px]' />
              </div>
              <div className="w-1/2 text-left p-1 pl-3 lg:p-2 ">
                <p className=' text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold font-mono text-center pb-2 sm:pb-0'>Log-in <span className='colr' >Page</span></p>
                <p className=' text-xs sm:text-base md:text-lg font-serif text-center' >Get started with the simple login, quick and fast and secure access to your code.</p>
              </div>
            </div>

            <div className="box-2 w-full flex justify-around items-center gap-2 sm:gap-7 p-2 sm:my-5  fadeUP">
              <div className="w-1/2 text-right p-1 lg:p-2 ">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold font-mono  text-center pb-2 sm:pb-0'> <span className='colr'>Quick Save</span> & View</p>
                <p className='text-xs sm:text-base md:text-lg font-serif text-center'>Quickly view your save code in one place, CRUD operations with direct interaction.</p>
              </div>
              <div className="img w-1/2  flex justify-center items-center ">
                <Save className='w-[50px] sm:w-[100px] md:w-[110px] lg:w-[130px] xl:w-[140px] h-[50px] sm:h-[100px] md:h-[140px]' />
              </div>
            </div>

            <div className="box-3 w-full flex justify-around items-center gap-3 sm:gap-7 p-2 sm:my-5 fadeUP">
              <div className="img w-1/2 flex justify-center items-center ">
                <View className='w-[50px] sm:w-[100px] md:w-[110px] lg:w-[130px] xl:w-[140px] h-[50px] sm:h-[100px] md:h-[140px]' />
              </div>
              <div className="w-1/2 text-left p-1 pl-3 md:p-2 ">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold font-mono text-center pb-2 sm:pb-0'>Quick <span className='colr' >Look</span></p>
                <p className='text-xs sm:text-base md:text-lg font-serif text-center'>Providing you the quick view mode for better understanding and better experience.</p>
              </div>
            </div>

            <div className="box-4 w-full flex justify-around items-center gap-3 sm:gap-7 p-2 sm:my-5 fadeUP">
              <div className="w-1/2 text-right p-1 md:p-2">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl  font-extrabold font-mono text-center pb-2 sm:pb-0'><span className='colr' >Responsive</span></p>
                <p className='text-xs sm:text-base md:text-lg font-serif text-center'>Available on any devices such as mac, androide and windows. Giving you better access option.</p>
              </div>
              <div className="img w-1/2 flex justify-center items-center  ">
                <MonitorSmartphone className='w-[60px] sm:w-[120px] md:w-[110px] lg:w-[180px] xl:w-[200px] h-[60px] sm:h-[120px] md:h-[130px]' />
              </div>
            </div>

            <div className="box-3 w-full flex justify-around items-center gap-3 sm:gap-7 p-2 sm:my-5 fadeUP">
              <div className="img w-1/2 flex justify-center items-center">
                <SquareMenu className='w-[50px] sm:w-[100px] md:w-[110px] lg:w-[140px] xl:w-[160px] h-[50px] sm:h-[100px] md:h-[160px]' />
              </div>
              <div className="w-1/2 text-left p-1 pl-3 md:p-2">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold font-mono text-center pb-2 sm:pb-0'>User <span className='colr' >Manual</span></p>
                <p className='text-xs sm:text-base md:text-lg  font-serif text-center'>Providing you quick user guide to understand the features. Helpful in website understanding.</p>
              </div>
            </div>
          </div>

        </div>

        <div className='flex-col justify-center items-center m-auto w-full sm:w-[90%] xl:w-full text-center mb-10'>
          <div className='text-xl sm:text-2xl lg:text-3xl  xl:text-4xl font-serif font-bold p-2'>What are you waiting for ?</div>
          <div className='text-xs sm:text-base lg:text-lg xl:text-xl font-semibold font-sans'><p>Get access to the seamless experience and be tension free from code acces and save problem. Be a memeber of our community</p></div>
        </div>

      </div>

    </>
  )
}

export default LandingPage