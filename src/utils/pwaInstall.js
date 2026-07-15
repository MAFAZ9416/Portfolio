/**
 * pwaInstall.js
 * Module-level singleton to capture `beforeinstallprompt` early.
 * Must be initialised in App.jsx before any component that uses it.
 */

let _deferredPrompt = null
let _installed = false

/** Call once at the top of your App to start listening. */
export function initPWAInstall() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()          // stop Chrome's mini-infobar
    _deferredPrompt = e
  })

  window.addEventListener('appinstalled', () => {
    _deferredPrompt = null
    _installed = true
  })
}

/** True when the native install prompt is available. */
export function canInstall() {
  return _deferredPrompt !== null
}

/** True after the user has already installed the app. */
export function isInstalled() {
  return _installed || window.matchMedia('(display-mode: standalone)').matches
}

/**
 * Trigger the native install prompt.
 * Resolves to 'accepted' | 'dismissed' | 'unavailable'.
 */
export async function triggerInstall() {
  if (!_deferredPrompt) return 'unavailable'
  _deferredPrompt.prompt()
  const { outcome } = await _deferredPrompt.userChoice
  _deferredPrompt = null
  return outcome
}
