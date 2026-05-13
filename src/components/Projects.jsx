import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay, FaGithub } from 'react-icons/fa'

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [

  {
    title: 'E-Commerce API',
    description: 'Full-featured e-commerce backend with Django REST Framework.',
    tags: ['DJANGO', 'DRF', 'POSTGRESQL', 'REACT'],
    liveUrl: 'https://tech-hub-blue-six.vercel.app/',
    githubUrl: 'https://github.com/MAFAZ9416/TechHub.git',
    image: project1,
  },

  {
    title: 'Blog Application',
    description: 'A modern blog platform with authentication and markdown.',
    tags: ['DJANGO', 'HTML', 'CSS', 'JS'],
    liveUrl: 'https://mafaz-blog.onrender.com',
    githubUrl: 'https://github.com/MAFAZ9416/Project-Blog.git',
    image: project2,
  },

  {
    title: 'Student Dashboard',
    description: 'Modern student dashboard with responsive UI and backend integration.',
    tags: ['REACT', 'SQLITE3', 'DJANGO'],
    liveUrl: ' https://student-dashboard-t84w.onrender.com',
    githubUrl: 'https://github.com/MAFAZ9416/Student-Dashboard.git',
    image: project3,
  },

  {
    title: 'RPS Game',
    description: 'Interactive Rock Paper Scissors game with modern UI and smooth gameplay.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://mafaz9416.github.io/RPS-GAME/',
    githubUrl: 'https://github.com/MAFAZ9416/RPS-GAME.git',
    image: project4,
  },

]

const Projects = () => {

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  })

  return (

    <section
      id="projects"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">

            Featured{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>

        </motion.div>

        {/* Sliding Projects */}
        <div className="relative overflow-hidden">

          <motion.div

            animate={{
              x: ['0%', '-50%']
            }}

            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear'
            }}

            className="flex gap-8 w-max"
          >

            {[...projects, ...projects].map((project, i) => (

              <motion.div
                key={i}

                whileHover={{
                  y: -10
                }}

                className="group min-w-[280px] sm:min-w-[300px] rounded-3xl overflow-hidden border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent z-10"></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-4">

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">

                    {project.title}

                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">

                    {project.description}

                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                      >

                        {tag}

                      </span>

                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">

                    {/* Live Demo */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"

                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 25px rgba(168,85,247,0.4)'
                      }}

                      whileTap={{ scale: 0.95 }}

                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold"
                    >

                      <FaPlay size={10} />

                      Live Demo

                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"

                      whileHover={{ scale: 1.05 }}

                      whileTap={{ scale: 0.95 }}

                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300"
                    >

                      <FaGithub size={12} />

                      GitHub

                    </motion.a>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>

  )

}

export default Projects