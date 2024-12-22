import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
      <div>
          <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{duration: 0.5}}
              className='mt-[-30px] mb-16 text-center text-4xl '>Projects</motion.h2>
          <div className='grid grid-cols-2 ml-16'>
              {PROJECTS.map((project, idx) => (
                  <div key={idx} className='mb-8 mr-10 flex flex-wrap  lg:justify-center'>
                      <motion.div
                          whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: 100}} transition={{duration: 1}}
                          className='w-full '>
                          <img src={project.image} width={400} height={400} alt={project.title} className='mb-[-70px] rounded object-contain' />
                      </motion.div>    
                      <motion.div
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 100 }}
                          transition={{duration: 1}}
                          className='w-full max-w-xl '>
                          <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                          <p className='mb-4 text-stone-400'>{project.description}</p>
                          {project.technologies.map((tech, index) => (
                              <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 key={index}'>{tech}</span>
                          ))}
                      </motion.div>
                      
                  </div>
              ))
              }
          </div>
    </div>
  )
}

export default Projects