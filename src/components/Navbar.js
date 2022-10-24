import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    }
  ]
  
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-4xl font-bold text-[#00df9a] font-signature'>GALANO.</h1>
        <ul className='hidden md:flex'>
          {links.map(({id, link}) => (
            <li key={id} className='p-4 cursor-pointer hover:scale-105 duration-200 capitalize'>
              <Link to={link} smooth duration={500}  >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>GALANO.</h1>
          <ul className='p-4 uppercase'>
            {links.map(({id, link}) => (
            <li key={id} className='p-4 border-b border-gray-600 capitalize cursor-pointer hover:scale-105 duration-200'>
              <Link onClick={handleNav} to={link} smooth duration={500}  >
                {link}
              </Link>
            </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Navbar