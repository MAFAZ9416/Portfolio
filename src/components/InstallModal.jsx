import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaAndroid, FaApple, FaWindows, FaDownload,
  FaTimes, FaShareAlt, FaPlusSquare, FaCheckCircle,
  FaExternalLinkAlt, FaGlobe,
} from 'react-icons/fa'
import { canInstall, isInstalled, triggerInstall } from '../utils/pwaInstall'

/* ─── Device detection ───────────────────────────────────────────────────── */
function detectPlatform() {
  const ua  = navigator.userAgent
  const pl  = navigator.platform || ''

  if (/iPad/.test(ua) || (pl === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ipad'
  if (/iPhone|iPod/.test(ua)) return 'iphone'
  if (/Android/.test(ua)) return 'android'
  if (/Win/.test(pl) || /Windows/.test(ua)) return 'windows'
  if (/Mac/.test(pl)) return 'macos'
  if (/Linux/.test(pl)) return 'linux'
  return 'windows'
}

/* ─── Platform config ────────────────────────────────────────────────────── */
const platformConfig = {
  android: {
    Icon: FaAndroid,
    label: 'Android',
    tagline: 'Install Progressly on your Android device',
    accent: 'green',
    apkFallback: true,
  },
  windows: {
    Icon: FaWindows,
    label: 'Windows',
    tagline: 'Install Progressly as a desktop app on Windows',
    accent: 'blue',
    apkFallback: false,
  },
  macos: {
    Icon: FaApple,
    label: 'macOS',
    tagline: 'Install Progressly as a desktop app on macOS',
    accent: 'silver',
    apkFallback: false,
  },
  linux: {
    Icon: FaGlobe,
    label: 'Linux',
    tagline: 'Install Progressly as a desktop app on Linux',
    accent: 'blue',
    apkFallback: false,
  },
  iphone: {
    Icon: FaApple,
    label: 'iPhone',
    tagline: 'Add Progressly to your iPhone Home Screen',
    accent: 'silver',
    apkFallback: false,
    iosGuide: true,
  },
  ipad: {
    Icon: FaApple,
    label: 'iPad',
    tagline: 'Add Progressly to your iPad Home Screen',
    accent: 'silver',
    apkFallback: false,
    iosGuide: true,
  },
}

/* ─── iOS Guide ─────────────────────────────────────────────────────────── */
const IOSGuide = () => (
  <div className="im-ios-guide">
    <p className="im-ios-guide-lead">
      Safari doesn't support automatic install prompts.<br />
      Follow these steps to add Progressly to your Home Screen:
    </p>
    <ol className="im-ios-steps">
      {[
        { Icon: FaShareAlt,  color: '#3b82f6', text: <>Tap the <strong>Share</strong> button at the bottom of Safari</> },
        { Icon: FaPlusSquare, color: '#10b981', text: <>Scroll down and tap <strong>"Add to Home Screen"</strong></> },
        { Icon: FaCheckCircle, color: '#8b5cf6', text: <>Tap <strong>"Add"</strong> to confirm — done! 🎉</> },
      ].map((step, i) => (
        <motion.li
          key={i}
          className="im-ios-step"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 + i * 0.09 }}
        >
          <div className="im-ios-step-num">{i + 1}</div>
          <div className="im-ios-step-icon" style={{ color: step.color }}>
            <step.Icon size={18} />
          </div>
          <p className="im-ios-step-text">{step.text}</p>
        </motion.li>
      ))}
    </ol>

    {/* Safari browser hint */}
    <div className="im-ios-hint">
      <span className="im-ios-hint-dot" />
      Make sure you are using <strong>Safari</strong> — Chrome/Firefox on iOS do not support Home Screen installation.
    </div>
  </div>
)

/* ─── Install Button States ──────────────────────────────────────────────── */
const InstallButton = ({ platform, accent, apkFallback, onClose }) => {
  const [installState, setInstallState] = useState(
    isInstalled() ? 'installed' : canInstall() ? 'ready' : 'unavailable'
  )

  // Re-check every second while modal is open (prompt may arrive late)
  useEffect(() => {
    const id = setInterval(() => {
      if (isInstalled()) { setInstallState('installed'); clearInterval(id) }
      else if (canInstall()) setInstallState('ready')
    }, 800)
    return () => clearInterval(id)
  }, [])

  const handleInstall = useCallback(async () => {
    if (installState !== 'ready') return
    setInstallState('prompting')
    const outcome = await triggerInstall()
    setInstallState(outcome === 'accepted' ? 'installed' : 'ready')
    if (outcome === 'accepted') setTimeout(onClose, 1200)
  }, [installState, onClose])

  const accentClass = `im-install-btn-${accent}`

  if (installState === 'installed') {
    return (
      <div className="im-installed-badge">
        <FaCheckCircle size={16} />
        Progressly is installed!
      </div>
    )
  }

  if (installState === 'ready' || installState === 'prompting') {
    return (
      <motion.button
        className={`im-install-btn ${accentClass}`}
        onClick={handleInstall}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        disabled={installState === 'prompting'}
      >
        <FaDownload size={14} />
        {installState === 'prompting' ? 'Opening installer…' : 'Install App'}
      </motion.button>
    )
  }

  /* unavailable — show fallback */
  if (apkFallback) {
    return (
      <div className="im-fallback-group">
        <p className="im-fallback-label">Native install not available in this browser</p>
        <motion.a
          href="/downloads/progressly.apk"
          download="Progressly.apk"
          className={`im-install-btn ${accentClass}`}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaDownload size={14} />
          Download APK
        </motion.a>
      </div>
    )
  }

  return (
    <div className="im-fallback-group">
      <p className="im-fallback-label">Use Chrome or Edge for the best install experience</p>
      <motion.a
        href="https://progressly-taupe.vercel.app/login/"
        target="_blank"
        rel="noopener noreferrer"
        className="im-install-btn im-install-btn-ghost"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <FaExternalLinkAlt size={13} />
        Open Web App
      </motion.a>
    </div>
  )
}

/* ─── InstallModal ───────────────────────────────────────────────────────── */
const InstallModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)
  const [platform]  = useState(() => detectPlatform())

  const cfg = platformConfig[platform]

  /* Escape key */
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeRef.current?.focus(), 120)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="im-overlay"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Install Progressly"
        >
          <motion.div
            className="im-panel"
            initial={{ opacity: 0, scale: 0.87, y: 28 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{ opacity: 0, scale: 0.91, y: 18 }}
            transition={{ type: 'spring', stiffness: 360, damping: 30, mass: 0.85 }}
          >
            {/* Close */}
            <button
              ref={closeRef}
              className="im-close"
              onClick={onClose}
              aria-label="Close install modal"
            >
              <FaTimes size={14} />
            </button>

            {/* Header */}
            <div className="im-header">
              <motion.div
                className={`im-header-icon im-icon-${cfg.accent}`}
                animate={{ boxShadow: [
                  `0 0 16px rgba(124,58,237,0.3)`,
                  `0 0 32px rgba(59,130,246,0.4)`,
                  `0 0 16px rgba(124,58,237,0.3)`,
                ]}}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <cfg.Icon size={26} />
              </motion.div>
              <div>
                <h2 className="im-title">Install Progressly</h2>
                <p className="im-subtitle">{cfg.tagline}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="im-divider" />

            {/* iOS Guide or Install Button */}
            {cfg.iosGuide ? (
              <IOSGuide />
            ) : (
              <div className="im-body">
                {/* Platform badge */}
                <div className={`im-platform-badge im-badge-${cfg.accent}`}>
                  <cfg.Icon size={14} />
                  Detected: {cfg.label}
                </div>

                {/* Feature highlights */}
                <div className="im-features">
                  {[
                    'Works offline — no internet needed after install',
                    'Launches instantly like a native app',
                    'No App Store or Play Store required',
                    'Gets automatic updates in the background',
                  ].map((f, i) => (
                    <motion.div
                      key={i}
                      className="im-feature-row"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <div className="im-feature-dot" />
                      <span>{f}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Install button / fallback */}
                <InstallButton
                  platform={platform}
                  accent={cfg.accent}
                  apkFallback={cfg.apkFallback}
                  onClose={onClose}
                />
              </div>
            )}

            {/* Footer */}
            <div className="im-footer">
              Need help?{' '}
              <a
                href="#contact"
                className="im-footer-link"
                onClick={onClose}
              >
                Contact me
              </a>{' '}
              for early access or support.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InstallModal
