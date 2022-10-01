import React from 'react'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Plan from '../components/Plan'
import Testimonals from '../components/Testimonals'
import Cookies from '../components/Cookies'

function Home() {
    return (
      <div>
            
            
            <Navbar />
            <HomeHero />
            <Features />
            <Plan />
            <Testimonals />
            <Footer />
            
        </div>
    )
}

export default Home
