import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import MouseGlow from './components/MouseGlow'
import StarBackground from './components/StarBackground'
import AuroraBackground from './components/AuroraBackground'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)

  }, [])

  // Loading Screen
  if (loading) {

    return (

      <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-[9999]">

        <div className="text-center">

          <div className="relative">

            {/* Spinner 1 */}
            <div className="w-20 h-20 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />

            {/* Spinner 2 */}
            <div
              className="absolute inset-0 w-20 h-20 rounded-full border-2 border-accent-400/20 border-b-accent-400 animate-spin"
              style={{
                animationDirection: 'reverse',
                animationDuration: '1.5s'
              }}
            />

          </div>

          <p className="mt-6 text-lg font-display font-semibold text-gradient">
            MOHAMMED MAFAZ
          </p>

        </div>

      </div>

    )

  }

  return (

    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      {/* Premium Animated Background */}
      <AuroraBackground />

      {/* Optional Effects */}
      <StarBackground />

      <MouseGlow />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>

  )

}

export default App