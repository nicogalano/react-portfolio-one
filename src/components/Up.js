import React from 'react'
import { Link } from "react-scroll";
import {FaArrowUp} from 'react-icons/fa'


const Up = () => {
  return (
    <div className='flex flex-col top-[90%] right-[1%] fixed'>
        <Link 
            to="home" 
            smooth 
            duration={500} 
            className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
        >
            <span>
                <FaArrowUp size={25} className='ml-1'/>
            </span>
        </Link>
    </div>
  )
}

export default Up