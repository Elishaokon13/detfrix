import React from "react";
import HomeHero from "../components/Client/HomeHero";
import Navbar from "../components/Client/Navbar";
import Banner from "../components/Client/Banner";
import Features from "../components/Client/Features";
import Footer from "../components/Client/Footer";
import Plan from "../components/Client/Plan";
import Testimonals from "../components/Client/Testimonals";
import Cookies from "../components/Client/Cookies";
import Faq from "../components/Client/Faq";
import HowItWorks from "../components/Client/HowItWorks";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Features />
      <HowItWorks />

      {/* <Testimonals /> */}
      <Plan />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default Home;
