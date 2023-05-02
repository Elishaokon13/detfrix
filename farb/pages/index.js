import About from "./components/about";
import CTA from "./components/cta";
import Faq from "./components/faqs";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";
import Socials from "./components/socials";
import Stats from "./components/stats";

export default function Home() {
  return (
    <div className="bg-[#f0f8ff] font-Josefin">
      <Hero/>
      <Services/>
      <About/>
      <Features/>
      <Stats/>
      <Socials/>
      <Faq/>
      <CTA/>
      <Footer/>
    </div>
  )
}