import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
      <div className='border-t border-stone-900 pb-6'>
          <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: 10 }}
              transition={{ duration: 1 }}
              className='my-4 text-center text-4xl'>Get in Touch</motion.h2>
          <div className='text-center tracking-tighter flex flex-wrap items-center justify-center gap-5'>
              <span className=''>
                  {CONTACT.phoneNo}
              </span>
              <span className='underline'>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shikharjoshi89@gmail.com" target="_blank">
                      {CONTACT.email}
                      </a>
              </span>
          </div>
    </div>
  )
}

export default Contact