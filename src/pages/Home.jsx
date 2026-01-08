import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ForWhom from "../components/ForWhom"
import Services from "../components/Services"
import Contact from "../components/Contact"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForWhom />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}