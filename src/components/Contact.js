import React from 'react'

const Contact = () => {

  return (
    <div name='contact' className='w-full h-scren bg-[#1e1c27] text-[#e3d2b4] p-4 '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>Si estás interesado en trabajar juntos o tienes alguna pregunta, por favor no dudes en ponerte en contacto conmigo a través de este formulario</p>
                {/* <p className='py-6'>Submit the form below to get in touch with me</p> */}
            </div>

            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/607d9a45-eccb-4820-b20c-36695ca40b4f" 
                    method="POST" 
                    className='flex flex-col w-full md:w-1/2'
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Ingresa tu nombre' 
                        // placeholder='Enter your name' 
                        className='p-2 bg-transparent border-2 rounded-md text-[#bde4b5] focus:outline-none'
                    />
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='Ingresa tu correo electrónico' 
                        // placeholder='Enter your email' 
                        className='p-2 my-4 bg-transparent border-2 rounded-md text-[#bde4b5] focus:outline-none' 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Ingresa tu mensaje" 
                        // placeholder="Enter your message" 
                        id="" 
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-[#bde4b5] focus:outline-none'
                    ></textarea>

                    <button className='my-4 bg-[#bde4b5] text-[#1e1c27] px-6 py-3 y-8 mx-auto flex item-center rounded-md hover:sclae-110 duration-300 font-bold'>
                        CONTÁCTAME
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact