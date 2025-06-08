import { useState } from 'react'
import Navbar from './components/Navbar'
import HamburgerNav from './components/HamburgerNav'
import Profile from './components/Profile'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CodingActivity from './components/CodingActivity'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="font-poppins">
      <Navbar />
      <HamburgerNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Profile />
      <About />
      <TechStack/>
      <Projects />
      <CodingActivity />
      <Contact />
      <Footer />
    </div>
  )
}

export default App