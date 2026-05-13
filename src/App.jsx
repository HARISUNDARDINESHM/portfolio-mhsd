import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import FeaturedProject from './components/Sections/FeaturedProject'
import Projects from './components/Sections/Projects'
import Internships from './components/Sections/Internships'
import Education from './components/Sections/Education'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
import StarsCanvas from './components/3D/Stars'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="app relative z-0">
      <StarsCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Internships />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
