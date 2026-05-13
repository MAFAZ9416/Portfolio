import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaRobot
} from 'react-icons/fa'

import {
  SiDjango,
  SiPostgresql,
  SiMysql
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'

const skills = [

  {
    name: 'Python',
    icon: <FaPython size={40} />,
    color: '#3776AB',
    glow: 'rgba(55,118,171,0.4)',
  },

  {
    name: 'Django',
    icon: <SiDjango size={40} />,
    color: '#44B78B',
    glow: 'rgba(68,183,139,0.4)',
  },

  {
    name: 'Django REST Framework',
    icon: <TbApi size={40} />,
    color: '#ff4d4d',
    glow: 'rgba(255,77,77,0.4)',
  },

  {
    name: 'HTML',
    icon: <FaHtml5 size={40} />,
    color: '#E34F26',
    glow: 'rgba(227,79,38,0.4)',
  },

  {
    name: 'CSS',
    icon: <FaCss3Alt size={40} />,
    color: '#1572B6',
    glow: 'rgba(21,114,182,0.4)',
  },

  {
    name: 'JavaScript',
    icon: <FaJs size={40} />,
    color: '#F7DF1E',
    glow: 'rgba(247,223,30,0.4)',
  },

  {
    name: 'React',
    icon: <FaReact size={40} />,
    color: '#61DAFB',
    glow: 'rgba(97,218,251,0.4)',
  },

  {
    name: 'MySQL',
    icon: <SiMysql size={40} />,
    color: '#00758F',
    glow: 'rgba(0,117,143,0.4)',
  },

  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={40} />,
    color: '#336791',
    glow: 'rgba(51,103,145,0.4)',
  },

  {
    name: 'SQL',
    icon: <SiMysql size={40} />,
    color: '#f29111',
    glow: 'rgba(242,145,17,0.4)',
  },

  {
    name: 'GitHub',
    icon: <FaGithub size={40} />,
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.3)',
  },

  {
    name: 'AI Tools',
    icon: <FaRobot size={40} />,
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.4)',
  },

]

const Skills = () => {

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  })

  return (

    <section
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">

            My{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>

          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">

          {skills.map((skill, i) => (

            <motion.div
              key={skill.name}

              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}

              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.5
              }}

              whileHover={{
                y: -10,
                boxShadow: `0 0 30px ${skill.glow},
                            0 0 60px ${skill.glow}`
              }}

              className="group rounded-2xl border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl p-5 flex flex-col items-center gap-4 cursor-pointer hover:border-purple-500/40 transition-all duration-500"
            >

              {/* Icon */}
              <div
                className="transition-all duration-300 group-hover:scale-125"
                style={{
                  color: skill.color
                }}
              >

                {skill.icon}

              </div>

              {/* Name */}
              <span className="text-sm text-gray-300 font-medium text-center group-hover:text-white transition-colors duration-300">

                {skill.name}

              </span>

            </motion.div>

          ))}

        </div>

        {/* Skill Progress Bars */}

        <div className="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">

          {[
            {
              icon: <FaPython size={28} />,
              level: '80%',
              color: '#3776AB'
            },

            {
              icon: <SiDjango size={28} />,
              level: '75%',
              color: '#44B78B'
            },

            {
              icon: <TbApi size={40} />,
              level: '70%',
              color: '#ff4d4d'
            },

            {
              icon: <FaHtml5 size={28} />,
              level: '55%',
              color: '#E34F26'
            },

            {
              icon: <FaCss3Alt size={28} />,
              level: '50%',
              color: '#1572B6'
            },

            {
              icon: <FaJs size={28} />,
              level: '45%',
              color: '#F7DF1E'
            },

            {
              icon: <FaReact size={28} />,
              level: '45%',
              color: '#61DAFB'
            },

            {
              icon: <SiMysql size={28} />,
              level: '85%',
              color: '#00758F'
            },

            {
              icon: <SiPostgresql size={28} />,
              level: '80%',
              color: '#336791'
            },

            {
              icon: <FaGithub size={28} />,
              level: '90%',
              color: '#ffffff'
            },

            {
              icon: <FaRobot size={28} />,
              level: '75%',
              color: '#a855f7'
            },

          ].map((skill, i) => (

            <motion.div
              key={i}

              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}

              transition={{
                delay: 0.2 + i * 0.1
              }}

              className="flex items-center gap-4"
            >

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl bg-[#0c1020]/70 border border-white/10 flex items-center justify-center backdrop-blur-xl flex-shrink-0"

                style={{
                  color: skill.color
                }}
              >

                {skill.icon}

              </div>

              {/* Progress Area */}
              <div className="flex-1">

                {/* Percentage */}
                <div className="flex justify-end mb-2">

                  <span
                    className="font-semibold"
                    style={{
                      color: skill.color
                    }}
                  >

                    {skill.level}

                  </span>

                </div>

                {/* Background */}
                <div className="w-full h-3 rounded-full bg-[#111827] overflow-hidden">

                  {/* Progress */}
                  <motion.div
                    initial={{ width: 0 }}

                    animate={isInView
                      ? { width: skill.level }
                      : {}
                    }

                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.1
                    }}

                    className="h-full rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"

                    style={{
                      width: skill.level,
                      background: `linear-gradient(to right,
                        ${skill.color},
                        #a855f7
                      )`
                    }}
                  />

                </div>
              </div>

            </motion.div>

          ))}

        </div>
      </div>

    </section>

  )
}

export default Skills