import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <div>
    <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-[-30px] mb-16 text-center text-4xl">
        Projects
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-4">
        {PROJECTS.map((project, idx) => (
            <div key={idx} className="mb-8 flex flex-wrap justify-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="mb-2 rounded h-[250px] w-full "
                    />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    <div className="flex flex-wrap  gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 whitespace-nowrap">
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

export default Projects