import React from 'react'
import { MediaQuerys } from '../../../base/mobile/mediaQuery'
export const Hero = () => {
  const isMobile = MediaQuerys("(max-width:720px)");
  return (
    <div>
        {isMobile === true ?
        (<div className='bg-hero bg-cover bg-center w-full h-[40rem]'>
        
        </div>):(<div className='bg-hero bg-cover bg-center w-full h-[40rem]'>
        
        </div>)}
    </div>
  )
}
