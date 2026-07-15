import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import { BsPerson, BsCodeSlash, BsFolder, BsEnvelope } from 'react-icons/bs'
import resume from '../assets/resume.pdf'

const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <BsPerson /> },
  { name: 'Skills', href: '#skills', icon: <BsCodeSlash /> },
  { name: 'Projects', href: '#projects', icon: <BsFolder /> },
  { name: 'Contact', href: '#contact', icon: <BsEnvelope /> },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isSubPage = location.pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    if (isSubPage) {
      // Navigate to home page and scroll to section after load
      const sectionId = href.replace('#', '')
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-strong shadow-lg shadow-primary-500/5'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="text-2xl md:text-3xl font-display font-bold text-gradient-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              M.
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.href.replace('#', '')
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                    }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Download CV + Hamburger */}
            <div className="flex items-center gap-3">
              <motion.a
                href={resume}
                download="Mohammed_Mafaz_CV.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-primary-500/40 text-primary-300 hover:bg-primary-500/10 hover:border-primary-400/60 transition-all duration-300 md:px-5 md:py-2.5"
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="text-sm" />
                Download CV
              </motion.a>

              {/* Mobile: Download CV visible */}
              <motion.a
                href={resume}
                download="Mohammed_Mafaz_CV.pdf"
                className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-primary-500/40 text-primary-300"
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-xs" />
                Download CV
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-full glass-strong z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-display font-bold text-gradient-purple">M.</span>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                        ? 'bg-primary-500/15 text-primary-400 border border-primary-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href={resume}
                  download="Mohammed_Mafaz_CV.pdf"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600/20 border border-primary-500/30 text-primary-300 font-medium"
                >
                  <FiDownload />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-strong border-t border-primary-500/10">
        <div className="flex items-center justify-around py-2 px-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                ? 'text-primary-400'
                : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
