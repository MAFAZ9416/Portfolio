import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay, FaGithub, FaProductHunt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"

export const projects = [
  {
    id: 1,
    title: 'E-Commerce API',
    description: 'Full-featured e-commerce backend with Django REST Framework, JWT auth, product management, and cart system.',
    tags: ['DJANGO', 'DRF', 'POSTGRESQL', 'REACT'],
    liveUrl: 'https://tech-hub-blue-six.vercel.app/',
    githubUrl: 'https://github.com/MAFAZ9416/TechHub.git',
    image: project1,
  },
  {
    id: 2,
    title: 'Blog Application',
    description: 'A modern blog platform with authentication, markdown support, and responsive design.',
    tags: ['DJANGO', 'HTML', 'CSS', 'JS'],
    liveUrl: 'https://mafaz-blog.onrender.com',
    githubUrl: 'https://github.com/MAFAZ9416/Project-Blog.git',
    image: project2,
  },
  {
    id: 3,
    title: 'Student Dashboard',
    description: 'Modern student dashboard with responsive UI, analytics, and full backend integration.',
    tags: ['REACT', 'SQLITE3', 'DJANGO'],
    liveUrl: 'https://student-dashboard-t84w.onrender.com',
    githubUrl: 'https://github.com/MAFAZ9416/Student-Dashboard.git',
    image: project3,
  },
  {
    id: 4,
    title: 'RPS Game',
    description: 'Interactive Rock Paper Scissors game with modern UI, score tracking, and smooth gameplay.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://mafaz9416.github.io/RPS-GAME/',
    githubUrl: 'https://github.com/MAFAZ9416/RPS-GAME.git',
    image: project4,
  },
  {
    id: 5,
    title: 'Nova AI - Intelligent Conversational Assistant',
    description: 'Developed a production-ready AI chat platform with secure user authentication, real-time AI conversations, file analysis capabilities, chat history tracking, and responsive modern UI. Integrated OAuth login systems, REST APIs, and scalable backend services to deliver a seamless user experience.',
    tags: [
        'React',
        'Django',
        'DRF',
        'PostgreSQL',
        'JWT',
        'OAuth',
        'AI Chatbot',
        'REST API',
        'Full Stack'
    ],
    liveUrl: 'https://novaai-lake.vercel.app/register',
    githubUrl: 'https://github.com/MAFAZ9416/Internship.git',
    image: project5,
  },
  {
    id: 6,
    title: "Progressly",
    description:
      "A modern SaaS productivity platform designed to help students and developers track skills, manage projects, monitor learning progress, earn achievements, organize daily tasks, and visualize personal growth through an intuitive dashboard.",
    tags: [
      "React",
      "Cloudinary",
      "Google OAuth",
      "Django",
      "Product Hunt",
      "PostgreSQL (Neon)",
      "JWT",
      "REST API",
      "SaaS",
      "Productivity"
    ],
    liveUrl: "https://progressly-taupe.vercel.app/login/",
    apkUrl: "/downloads/progressly.apk",
    productHuntUrl: "https://www.producthunt.com/products/progressly-2?utm_source=other&utm_medium=social",
    image: project6,
    featured: true,
  },
]

/* ─── Traveling Border Card ─────────────────────────────────────────────── */
const TravelingBorderCard = ({ children, className = '' }) => (
  <div className={`traveling-border-wrapper ${className}`}>
    <div className="traveling-border-ring" />
    <div className="traveling-border-inner">
      {children}
    </div>
  </div>
)

/* ─── Project Card ──────────────────────────────────────────────────────── */
export const ProjectCard = ({ project }) => (
  <TravelingBorderCard className="project-card-container">
    <div className="project-glass-card">
      {/* Image */}
      <div className="project-card-image-wrap">
        <div className="project-card-image-overlay" />
        <img
          src={project.image}
          alt={project.title}
          className="project-card-img"
          loading="lazy"
        />
        {/* Featured Badge */}
        {project.featured && (
          <div className="project-featured-badge">
            ⭐ Featured SaaS
          </div>
        )}
      </div>

      {/* Content */}
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tags */}
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-card-btns">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-live"
          >
            <FaPlay size={11} />
            Live Demo
          </motion.a>

          {project.productHuntUrl ? (
            <motion.a
              href={project.productHuntUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-code btn-producthunt"
              title="See Progressly on Product Hunt"
              aria-label="View Progressly on Product Hunt"
            >
              <FaProductHunt size={14} />
              View on Product Hunt
            </motion.a>
          ) : (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-code"
            >
              <FaGithub size={14} />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </TravelingBorderCard>
)

/* ─── Main Section ──────────────────────────────────────────────────────── */
const Projects = () => {
  const ref = useRef(null)
  const navigate = useNavigate()

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  // Double the projects for seamless CSS marquee (track animates -50% = exactly 1 copy width)
  const doubled = [...projects, ...projects]

  return (
    <section id="projects" className="relative py-20 md:py-32" ref={ref}>
      {/* BG Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto" />
        </motion.div>
      </div>

      {/* ── Marquee (full-width, no container clipping) ── */}
      <div className="marquee-viewport">
        {/* Fade edges */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track projects-track">
          {doubled.map((project, i) => (
            <div key={i} className="marquee-slide project-slide">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="view-all-btn"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects