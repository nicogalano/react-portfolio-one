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
            className='text-white w-fit px-4 py-3 flex items-center rounded-md bg-gradient-to-r from-[#00df9a]/50 to-[#11994e]/50 cursor-pointer md:from-[#00df9a]  md:to-[#11994e]'
        >
            <span>
                <FaArrowUp size={25} className='ml-1'/>
            </span>
        </Link>
    </div>
  )
}

export default Up