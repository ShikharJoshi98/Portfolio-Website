import React from 'react'
import {HERO_CONTENT} from "../constants/index"
const Hero = () => {
  return (
    <div className='pb-4 '>
      <div className='w-full'>
        <div className='flex flex-col items-center mt-4 '>
          <h2 className='pb-2 text-4xl tracking-tighter lg:text-7xl'>Shikhar Joshi</h2>
          <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl
          tracking-tight text-transparent pb-7'>Full Stack Developer</span>
          <a href="/resume.pdf" target='blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Download Resume</a>
         </div>
      </div>  
    </div>
  )
}

export default Hero