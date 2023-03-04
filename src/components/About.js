import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e1c27] text-[#e3d2b4] md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-[#e3d2b4]'>
        <div className='pb-8'>
          <p className='text-5xl font-bold flex justify-center'>About</p>
        </div>
        <p className='text-xl mt-10'>
          Soy un desarrollador de software con más de cinco años de experiencia en la creación de soluciones digitales para empresas de diferentes industrias. Me apasiona encontrar soluciones creativas a problemas complejos y ayudar a mis clientes a alcanzar sus objetivos empresariales a través de la tecnología.
        </p>
        <br />
        <p className='text-xl'>
          Mi objetivo es proporcionar soluciones innovadoras y de alta calidad a mis clientes, y estoy comprometido a trabajar en colaboración para asegurar el éxito de cada proyecto. Si deseas discutir su próximo proyecto o simplemente charlar sobre tecnología, ¡no dude en ponerse en contacto conmigo! 
        </p>
      </div>
    </div>
  )
}

export default About