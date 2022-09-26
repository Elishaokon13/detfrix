import React, { useState } from 'react'

import Header from '../components/molecules/Header'

import NavbarMobile from '../components/molecules/NavbarMobile'

import Home from '../pages/Home'

const Layout = () => {
  const [Open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!Open);
 };
  return (
    <div className='bg-[#CDCBCB] flex flex-col gap-5'>
        {Open && <NavbarMobile handleNav={handleNav}/>}
        <Header handleNav={handleNav}/>
        <Home/>
    </div>
  )
}

export default Layout