import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'Mohammed Mafaz T S'
const siteUrl = 'https://mafaz-portfolio-gold.vercel.app'
const socialImage = `${siteUrl}/og-image.png`
const themeColor = '#050816'

const routes = {
  '/': {
    title: 'Mohammed Mafaz T S | Backend Developer Portfolio',
    description:
      'Mohammed Mafaz T S is a Backend Developer specializing in Django and Django REST Framework, showcasing projects, skills, and certifications in a focused portfolio.',
  },
  '/projects': {
    title: 'Projects | Mohammed Mafaz T S',
    description:
      'Explore backend and full-stack projects by Mohammed Mafaz T S, built with Django, Django REST Framework, React, and modern web tools.',
  },
  '/certificates': {
    title: 'Certificates | Mohammed Mafaz T S',
    description:
      'Browse certifications and internships earned by Mohammed Mafaz T S across Python, Django, SQL, analytics, and backend development.',
  },
}

const sameAs = [
  'https://github.com/MAFAZ9416',
  'https://www.linkedin.com/in/mohammed-mafaz-t-s-778602376/',
  'https://www.instagram.com/_mafaz__7/',
]

function upsertMeta(selector, attributes) {
  const element = document.querySelector(selector)
  if (!element) return

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value)
    }
  })
}

function buildStructuredData(url, description) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteName,
      url,
      jobTitle: 'Backend Developer',
      description,
      sameAs,
      image: socialImage,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Mohammed Mafaz T S | Backend Developer Portfolio',
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: 'Mohammed Mafaz T S | Backend Developer Portfolio',
      url,
      about: {
        '@type': 'Person',
        name: siteName,
      },
      mainEntity: {
        '@type': 'Person',
        name: siteName,
      },
    },
  ]
}

const Seo = () => {
  const location = useLocation()

  useEffect(() => {
    const current = routes[location.pathname] ?? routes['/']
    const url = `${siteUrl}${location.pathname}`

    document.title = current.title

    upsertMeta('#seo-description', { name: 'description', content: current.description })
    upsertMeta('#seo-robots', { name: 'robots', content: 'index, follow' })
    upsertMeta('#seo-theme-color', { name: 'theme-color', content: themeColor })
    upsertMeta('#seo-canonical', { rel: 'canonical', href: url })

    upsertMeta('#seo-og-title', { property: 'og:title', content: current.title })
    upsertMeta('#seo-og-description', { property: 'og:description', content: current.description })
    upsertMeta('#seo-og-type', { property: 'og:type', content: 'website' })
    upsertMeta('#seo-og-url', { property: 'og:url', content: url })
    upsertMeta('#seo-og-site-name', { property: 'og:site_name', content: siteName })
    upsertMeta('#seo-og-image', { property: 'og:image', content: socialImage })

    upsertMeta('#seo-twitter-card', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('#seo-twitter-title', { name: 'twitter:title', content: current.title })
    upsertMeta('#seo-twitter-description', { name: 'twitter:description', content: current.description })
    upsertMeta('#seo-twitter-image', { name: 'twitter:image', content: socialImage })

    const existing = document.getElementById('seo-jsonld')
    if (location.pathname === '/') {
      const data = JSON.stringify(buildStructuredData(url, current.description))
      if (existing) {
        existing.textContent = data
      } else {
        const script = document.createElement('script')
        script.id = 'seo-jsonld'
        script.type = 'application/ld+json'
        script.textContent = data
        document.head.appendChild(script)
      }
    } else if (existing) {
      existing.remove()
    }
  }, [location.pathname])

  return null
}

export default Seo