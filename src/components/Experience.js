import React from 'react'



const Experience = () => {
    const techs = [
        {
            id: 1,
            src: "html",
            title: 'HMTL',
            style: 'shadow-orange-500' 
        },
        {
            id: 2,
            src: "html",
            title: 'HMTL',
            style: 'shadow-blue-500' 
        },
        {
            id: 3,
            src: "html",
            title: 'HMTL',
            style: 'shadow-yellow-500' 
        },
    ]    

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black text-white md:h-scrren'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({ id, src, title, style }) => (
                        <div 
                            key={id} 
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img 
                                src={src} 
                                alt="" 
                                className='2-20 mx-auto'
                            />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience