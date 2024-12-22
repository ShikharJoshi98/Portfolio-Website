import React from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button'
import resume from '../../public/Shikhar_Joshi_resume.pdf'

const Hero = () => {
  return (
    <div className='pb-4  mt-10'>
      <div className='w-full'>
        <div initial="hidden" animate="visible"  className='flex flex-col items-center mt-4 '>
          <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{duration: 0.5}}  className='pb-4 text-white text-4xl tracking-tighter lg:text-7xl'>Shikhar Joshi</motion.h2>
          <motion.span whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{duration: 0.5}} className='bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-3xl
          tracking-tight text-transparent pb-7'>Full Stack Developer</motion.span>
          <motion.div whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 6 }}
                        transition={{duration: 0.5}}>
            <Button className=' mb-8 md:mb-0 w-full sm:w-fit border-t-2 rounded-full border-none bg-[#3b3b3b] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 hover:text-black duration-500'><a href={resume} download className='bg-clip-text  ' >Download Resume</a></Button>
            </motion.div>
         </div>
      </div>  
    </div>
  )
}

export default Hero