import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
      <div className='border-t border-stone-900 pb-6'>
          <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: 50 }}
              transition={{ duration: 1 }}
              className='my-4 text-center text-4xl'>Get in Touch</motion.h2>
          <div className='text-center tracking-tighter'>
              <p className=''>
                  {CONTACT.phoneNo}
              </p>
          </div>
    </div>
  )
}

export default Contact