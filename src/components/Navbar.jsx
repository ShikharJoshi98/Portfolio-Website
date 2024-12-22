import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';


const Navbar = () => {
  return (
      
          
          <div className='m-10 flex items-center justify-center gap-8 text-2xl'>
          <TooltipProvider>
  <Tooltip>
    <TooltipTrigger> <a href="https://www.linkedin.com/in/shikhar-joshi11/"
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
    <TooltipTrigger> <a href="https://github.com/ShikharJoshi98"
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
    <TooltipTrigger> <a href="https://www.instagram.com/shikharjoshi11/"
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

      </div>        
   
  )
}

export default Navbar