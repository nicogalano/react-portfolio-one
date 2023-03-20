import React from 'react'
import hflow from '../assets/hflow.png'
import Opscour from '../assets/opscour.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src:hflow,
            name:'hflow'
        },
        {
            id: 2,
            src:Opscour,
            name:'opscour'
        }
        // {
        //     id: 3,
        //     src:HeroImage
        // },
        // {
        //     id: 4,
        //     src:HeroImage
        // },
        // {
        //     id: 5,
        //     src:HeroImage
        // },
        // {
        //     id: 6,
        //     src:HeroImage
        // }
    ]

  return (
    <div name='portfolio' className='w-full bg-[#1e1c27] text-[#e3d2b4] md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w/full md:h-full'>
            <div className=''>
                <p className='text-5xl font-bold flex justify-center'>Portafolio</p>
                <p className='my-6 md:text-xl text-md'>Revisa algunos de mis trabajos</p>
                {/* <p className='py-6'>Check out some of my work here</p> */}
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({ id, src, name }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                                src={src} 
                                alt="" 
                                className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>
                                    {name}
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