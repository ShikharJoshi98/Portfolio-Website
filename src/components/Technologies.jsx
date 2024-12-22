import React from 'react'
import { FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { easeIn, motion } from 'framer-motion'

const iconVaraints = (duration) => ({
    initial: { y: -2 },
    animate: {
        y: [2, -2],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const iconVaraints2 = (duration) => ({
    initial: { y: 2 },
    animate: {
        y: [-2, 2],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
      <div >
          <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: 15}} transition={{duration: 1.5}} className='mt-8 mb-20 text-center text-4xl pb-8'>Technologies</motion.h2>
          <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-20'>
              <motion.div initial="inital" animate="animate" variants={iconVaraints(1)} className='mt-8'>
                  <RiReactjsLine className='text-7xl text-cyan-400'/>
              </motion.div>
              <motion.div initial="inital" animate="animate" variants={iconVaraints2(1)} className='mt-8' >
                  <SiExpress className='text-7xl'/>
              </motion.div>
              <motion.div initial="inital" animate="animate" variants={iconVaraints(1)} className='mt-8'>
                  <SiMongodb className='text-7xl text-cyan-500'/>
              </motion.div>
              <motion.div initial="inital" animate="animate" variants={iconVaraints2(1)} className='mt-8'>
                  <FaNodeJs className='text-7xl text-green-500'/>
              </motion.div>
           </motion.div>
          </div>
      
  )
}

export default Technologies