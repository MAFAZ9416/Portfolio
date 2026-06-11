import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

import ProjectsPage from './components/ProjectsPage'
import CertificatesPage from './components/CertificatesPage'

import MouseGlow from './components/MouseGlow'
import StarBackground from './components/StarBackground'
import AuroraBackground from './components/AuroraBackground'

/* ─── Home Page ─────────────────────────────────────────────────────────── */
const HomePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
            <div
              className="absolute inset-0 w-20 h-20 rounded-full border-2 border-accent-400/20 border-b-accent-400 animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
            />
          </div>
          <p className="mt-6 text-lg font-display font-semibold text-gradient">MAFAZ</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-x-hidden">
      <AuroraBackground />
      <StarBackground />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* ─── App ────────────────────────────────────────────────────────────────── */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  )
}

export default App