import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id:1,
      title:'inicio',
      link:'home'
    },
    {
      id:2,
      title:'Sobre',
      link:'about'
    },
    {
      id:3,
      title:'portafolio',
      link:'portfolio'
    },
    {
      id:4,
      title:'experiencia',
      link:'experience'
    },
    {
      id:5,
      title:'contacto',
      link:'contact'
    }
  ]
  
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div name='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#e3d2b4]'>
        <h1 className='w-full md:text-5xl text-4xl text-[#DFE0B6] font-signature font-light'>NICOLAS<span className='font-extrabold text-[#e3d2b4]'>GALANO</span></h1>
        <ul className='hidden md:flex'>
          {links.map(({id, link, title}) => (
            <li key={id} className='p-4 text-[#e3d2b4] cursor-pointer hover:scale-105 duration-200 capitalize'>
              <Link to={link} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#1e1c27] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-4xl text-[#DFE0B6] font-signature font-light m-6'>NICOLAS<span className='font-extrabold text-[#e3d2b4]'>GALANO</span></h1>
          <ul className='p-4 uppercase text-2xl'>
            {links.map(({id, link, title}) => (
            <li key={id} className='p-4 border-b border-gray-600 capitalize cursor-pointer hover:scale-105 duration-200'>
              <Link onClick={handleNav} to={link} smooth duration={500}  >
                {title}
              </Link>
            </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Navbar