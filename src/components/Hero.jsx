import React from 'react'

import { Button } from './ui/button'



const Hero = () => {
  return (
    <div className='pb-4 '>
      <div className='w-full'>
        <div initial="hidden" animate="visible"  className='flex flex-col items-center mt-4 '>
          <h2  className='pb-4 text-white text-4xl tracking-tighter lg:text-7xl'>Shikhar Joshi</h2>
          <span  className='bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-3xl
          tracking-tight text-transparent pb-7'>Full Stack Developer</span>
          <Button className=' mb-8 md:mb-0 w-full sm:w-fit border-t-2 rounded-full border-none bg-[#3b3b3b] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 hover:text-black duration-500'><a href="#" download className='bg-clip-text  ' >Download Resume</a></Button>
         </div>
      </div>  
    </div>
  )
}

export default Hero