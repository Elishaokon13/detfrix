import React from 'react'
import About from '../components/molecules/About'
import { Features } from '../components/molecules/Features/features'
import Hero from '../components/molecules/Hero'
import { Navbar } from '../components/molecules/Navbar/navbar'
import Plan from '../components/molecules/Plan'
import Service from '../components/molecules/Services'

const Layout = () => {
  return (
    <div className='bg-[#CDCBCB] flex flex-col gap-5'>
      <Navbar/>
        <Hero/>
        <Features/>
        <About/>
        <Plan/>
        <Service/>
    </div>
  )
}

export default Layout