import React from 'react'
import { MediaQuerys } from '../../../base/mobile/mediaQuery'
import { Navbar } from '../NavbarDesktop/navbar';
import NavbarMobile from '../NavbarMobile';
export const Header = () => {
    const isMobile = MediaQuerys("(max-width:720px)");
  return (
    <div className='fixed'>
        {isMobile === true ? (
            <NavbarMobile/>
        ): (
            <Navbar/>
        )}
    </div>
  )
}
