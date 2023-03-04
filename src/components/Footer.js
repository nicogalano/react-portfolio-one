import React, { useState } from 'react'
import { Link } from 'react-scroll'


const Footer = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <footer className="p-4 text-[#e3d2b4] rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Nicolas Galano™</a>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0">
                <li>
                    <Link onClick={handleNav} to='navbar' smooth duration={500} className="mr-4 hover:underline md:mr-6">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link onClick={handleNav} to='about' smooth duration={500} className="mr-4 hover:underline md:mr-6">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link onClick={handleNav} to='portfolio' smooth duration={500} className="mr-4 hover:underline md:mr-6">
                        Portafolio
                    </Link>
                </li>
                <li>
                    <Link onClick={handleNav} to='experience' smooth duration={500} className="mr-4 hover:underline md:mr-6">
                        Experiencia
                    </Link>
                </li>
                <li>
                    <Link onClick={handleNav} to='contact' smooth duration={500} className="mr-4 hover:underline md:mr-6">
                        Contacto
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
