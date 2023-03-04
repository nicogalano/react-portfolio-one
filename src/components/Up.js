import React from 'react'
import { Link } from "react-scroll";
import {FaArrowUp} from 'react-icons/fa'


const Up = () => {
  return (
    <div className='flex flex-col top-[90%] right-[1%] fixed'>
        <Link 
            to="navbar" 
            smooth 
            duration={500} 
            className='text-[#1e1c27] w-fit px-4 py-3 flex items-center rounded-md bg-[#79AA8F] cursor-pointer'
        >
            <span>
                <FaArrowUp size={25} className='ml-1'/>
            </span>
        </Link>
    </div>
  )
}

export default Up