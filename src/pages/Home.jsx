import React from 'react'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Plan from '../components/Plan'

function Home() {
    return (
      <div>
            <Banner />
            <Navbar />
            <HomeHero />
            <Features />
            <Plan />
            <Footer />
            
        </div>
    )
}

export default Home
