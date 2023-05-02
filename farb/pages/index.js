import React from "react";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Plan from "./components/Plan";
import HowItWorks from "./components/HowItWorks";

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
