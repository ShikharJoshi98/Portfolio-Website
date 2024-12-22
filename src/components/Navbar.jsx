import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';


const Navbar = () => {
  return (
      <nav className='flex items-center justify-between py-2'>
          <div className='flex flwx-shrink-0 items-center'>
              <a href="/" aria-label='Home'>
                  <img src="src/assets/raviKumarLogo.webp" alt="Logo" width={50} height={33} className='mx-2' />
              </a>
          </div>
          <div className='m-8 flex items-center justify-center gap-8 text-2xl'>
          <TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.linkedin.com/in/your-linked-profile"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  ><FaLinkedin/></a>
              </TooltipTrigger>
    <TooltipContent>
               LinkedIn     
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.github.com/in/your-github-profile"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Github'
                  ><FaGithub/></a>
              </TooltipTrigger>
    <TooltipContent>
               GitHub     
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.Instagram.com/in/"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  ><FaInstagram/></a>
              </TooltipTrigger>
    <TooltipContent>
               Instagram    
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="#"
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Email'
                  ><MdOutlineMailOutline/></a>
              </TooltipTrigger>
    <TooltipContent>
               Mail me     
                  
              
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
              
          </div>
    </nav>
  )
}

export default Navbar