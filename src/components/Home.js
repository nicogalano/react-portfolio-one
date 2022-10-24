import React from 'react'
import HeroImage from '../assets/photo2.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-[#000300] via-[#000300] to-gray-800'>

        <div className="max-w-screen-lg mx-auto px-4 h-full flex flex-col items-center justify-center md:flex-row">
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-300 py-4 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas commodi, voluptatem laudantium itaque adipisci voluptatum libero illum sit vero doloremque temporibus quo non odio optio id? Dolor quos quisquam beatae?
            </p>

            <div>
              <Link 
                to="portfolio" 
                smooth 
                duration={500} 
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#00df9a] to-[#11994e] cursor-pointer'
              >
                Portfolio
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