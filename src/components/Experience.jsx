import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <div className='pb-4'>
    <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Experience
    </motion.h2>
    <div className='px-4 sm:px-8 lg:px-0  '>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm md:pl-40 lg:pl-40 text-stone-400'>{experience.year}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full  md:pl-24 max-w-2xl lg:w-3/4'>
                    <h3 className='mb-2 font-semibold'>
                        {experience.role} -{' '}
                        <span className='text-sm text-stone-500'>{experience.company}</span>
                    </h3>
                    <p className='mb-4 text-stone-400 '>{experience.description}</p>
                    <div className='flex flex-wrap  gap-1'>
                    {experience.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className='mr-2  mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'>
                            {tech}
                        </span>
                    ))}
                    </div>
                </motion.div>
            </div>
        ))}
    </div>
</div>

  )
}

export default Experience