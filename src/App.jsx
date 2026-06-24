import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
import Background3D from './components/3D/Background3D'
import LoadingScreen from './components/UI/LoadingScreen'
import './index.css'
import './App.css'

function App() {
  const [isLoading, setIsLoading]           = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleLoadComplete = (clicked) => {
    setUserInteracted(clicked);
    setIsLoading(false);
  };

  return (
    <div className="app relative z-0">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Background3D />
          <Navbar />
          <main>
            <Hero startUnmuted={userInteracted} />
            <About />
            <Skills />
            <FeaturedProject />
            <Projects />
            <Internships />
            <Education />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  )
}

export default App
