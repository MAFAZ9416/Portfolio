import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/MAFAZ9416', label: 'GitHub' },
    { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/mohammed-mafaz-t-s-778602376/', label: 'LinkedIn' },
    { icon: <HiOutlineMail size={18} />, href: '#contact', label: 'Email' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/_mafaz__7/', label: 'Instagram' },
  ]

  return (
    <footer className="relative border-t border-primary-500/10 pb-20 md:pb-0">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.span
              className="text-2xl font-display font-bold text-gradient-purple"
              whileHover={{ scale: 1.05 }}
            >
              M.
            </motion.span>

            {/* Social icons - mobile */}
            <div className="flex items-center gap-3 md:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Mohammed Mafaz T S. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
            whileHover={{ y: -3, boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <BsArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
