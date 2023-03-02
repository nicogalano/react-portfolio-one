import React from 'react'
import HeroImage from '../assets/photo2.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#1e1c27]'>

        <div className="max-w-screen-lg mx-auto px-4 h-full flex flex-col items-center justify-center md:flex-row text-[#e3d2b4]">
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#e3d2b4]'>Desarrollador Full Stack</h2>
            {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#e3d2b4]'>I'm a Full Stack Developer</h2> */}
            <p className='text-[#e3d2b4] py-4 max-w-md'>
              Ayudando a las empresas a alcanzar sus objetivos empresariales a través de la tecnología
              {/* Desarrollando soluciones digitales personalizadas para su negocio */}
            </p>

            <div>
              <Link 
                to="portfolio" 
                smooth 
                duration={500} 
                className='group text-[#1e1c27] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#bde4b5] cursor-pointer font-bold'
              >
                CONTÁCTAME
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img 
              src={HeroImage} 
              alt="my profile" 
              className='rounded-2xl mx-auto w-2/3 md:w-full' />
          </div>
        </div>
    </div>
  )
}

export default Hero