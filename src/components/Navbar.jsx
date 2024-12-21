import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Navbar = () => {
  return (
      <nav className='flex items-center justify-between py-6'>
          <div className='flex flwx-shrink-0 items-center'>
              <a href="/" aria-label='Home'>
                  <img src="src/assets/raviKumarLogo.webp" alt="Logo" width={50} height={33} className='mx-2' />
              </a>
          </div>
          <div className='m-8 flex items-center justify-center gap-8 text-2xl'>
              <a href="https://www.linkedin.com/in/your-linked-profile"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
              >
                  <FaLinkedin/>
              </a>
              <a href="https://www.github.com/in/your-github-profile"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
              >
                  <FaGithub/>
              </a>
              <a href="https://www.instagram.com/in/"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
              >
                  <FaInstagram/>
              </a>
              
          </div>
    </nav>
  )
}

export default Navbar