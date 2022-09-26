import React from 'react'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import { Features } from '../components/molecules/Features/features'
import About from '../components/molecules/About'
import Hero from '../components/molecules/Hero'
import Plan from '../components/molecules/Plan'
import Service from '../components/molecules/Services'
function Home() {
    return (
      <div>

        <Hero/>
        <Features/>
        <About/>
        <Plan/>
        <Service/>
    
            {/* <Navbar />
            <HomeHero />
            <Features /> */}
            
        </div>
    )
}

export default Home