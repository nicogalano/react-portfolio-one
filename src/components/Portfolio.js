import React from 'react'
import HeroImage from '../assets/photo2.png'

const Portfolio = () => {
    const portfoios = [
        {
            id: 1,
            src:HeroImage
        },
        {
            id: 2,
            src:HeroImage
        },
        {
            id: 3,
            src:HeroImage
        },
        {
            id: 4,
            src:HeroImage
        },
        {
            id: 5,
            src:HeroImage
        },
        {
            id: 6,
            src:HeroImage
        }
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 text-white md:h-scrren'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfoios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                                src={src} 
                                alt="" 
                                className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>
                                    Demo
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>
                                    Code
                                </button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio