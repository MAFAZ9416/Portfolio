import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { projects, ProjectCard } from './Projects'
import Navbar from './Navbar'

const ProjectsPage = () => {
  const navigate = useNavigate()

  // Always start at the top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-x-hidden">
      {/* BG glow */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {/* Back button */}
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </motion.button>

            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                All{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                A complete collection of my work — from APIs to full-stack applications.
              </p>
              <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto mt-6" />
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="projects-grid"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage
