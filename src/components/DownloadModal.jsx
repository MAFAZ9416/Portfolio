import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAndroid, FaApple, FaDownload, FaTimes, FaWindows } from 'react-icons/fa'

/* ─── Platform data ──────────────────────────────────────────────────────── */
const platforms = [
  {
    id: 'android',
    icon: FaAndroid,
    name: 'Android',
    description: 'Install the latest Android version of Progressly.',
    buttonLabel: 'Download APK',
    href: '/downloads/progressly.apk',
    download: 'Progressly.apk',
    accent: 'green',
    available: true,
  },
  {
    id: 'windows',
    icon: FaWindows,
    name: 'Windows PC',
    description: 'Run Progressly on your Windows computer.',
    buttonLabel: 'Download for Windows',
    href: '/downloads/progressly_pc.lnk',
    download: 'Progressly_PC.lnk',
    accent: 'blue',
    available: true,
  },
  {
    id: 'ios',
    icon: FaApple,
    name: 'iOS',
    description: 'iOS version is currently under development.',
    buttonLabel: 'Coming Soon',
    href: null,
    download: null,
    accent: 'grey',
    available: false,
  },
]

/* ─── Accent colour maps ─────────────────────────────────────────────────── */
const accentMap = {
  green: {
    card: 'dm-card-green',
    btn: 'dm-btn-green',
    icon: 'dm-icon-green',
    border: 'dm-border-green',
  },
  blue: {
    card: 'dm-card-blue',
    btn: 'dm-btn-blue',
    icon: 'dm-icon-blue',
    border: 'dm-border-blue',
  },
  grey: {
    card: 'dm-card-grey',
    btn: 'dm-btn-grey',
    icon: 'dm-icon-grey',
    border: 'dm-border-grey',
  },
}

/* ─── DownloadModal ──────────────────────────────────────────────────────── */
const DownloadModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)

  /* Escape key */
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  /* Lock body scroll while open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus close button
      setTimeout(() => closeRef.current?.focus(), 120)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Click outside overlay */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Overlay ── */
        <motion.div
          ref={overlayRef}
          className="dm-overlay"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label="Download Progressly"
        >
          {/* ── Panel ── */}
          <motion.div
            className="dm-panel"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{ opacity: 0, scale: 0.9,  y: 16 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28, mass: 0.9 }}
          >
            {/* ── Close button ── */}
            <button
              ref={closeRef}
              className="dm-close"
              onClick={onClose}
              aria-label="Close download modal"
            >
              <FaTimes size={15} />
            </button>

            {/* ── Header ── */}
            <div className="dm-header">
              <div className="dm-header-icon">
                <FaDownload size={20} />
              </div>
              <div>
                <h2 className="dm-title">Download Progressly</h2>
                <p className="dm-subtitle">Choose your platform</p>
              </div>
            </div>

            {/* ── Platform cards ── */}
            <div className="dm-cards-grid">
              {platforms.map((p, i) => {
                const Icon    = p.icon
                const colors  = accentMap[p.accent]
                return (
                  <motion.div
                    key={p.id}
                    className={`dm-card ${colors.card} ${colors.border}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.38, ease: 'easeOut' }}
                    whileHover={p.available ? { y: -5, scale: 1.02 } : {}}
                  >
                    {/* Icon */}
                    <div className={`dm-card-icon ${colors.icon}`}>
                      <Icon size={32} />
                    </div>

                    {/* Info */}
                    <h3 className="dm-card-name">{p.name}</h3>
                    <p className="dm-card-desc">{p.description}</p>

                    {/* Coming Soon badge for iOS */}
                    {!p.available && (
                      <span className="dm-coming-badge">Coming Soon</span>
                    )}

                    {/* Download button */}
                    {p.available ? (
                      <motion.a
                        href={p.href}
                        download={p.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`dm-btn ${colors.btn}`}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaDownload size={12} />
                        {p.buttonLabel}
                      </motion.a>
                    ) : (
                      <button className="dm-btn dm-btn-disabled" disabled>
                        {p.buttonLabel}
                      </button>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* ── Footer note ── */}
            <p className="dm-footer-note">
              Need another platform?{' '}
              <a
                href="#contact"
                className="dm-footer-link"
                onClick={onClose}
              >
                Contact me
              </a>{' '}
              for early access or beta versions.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DownloadModal
