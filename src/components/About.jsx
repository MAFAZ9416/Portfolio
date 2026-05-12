import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUser, FaBriefcase, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import profileImg from "../assets/profile.png";

const About = () => {

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  })

  const [rotation, setRotation] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 30)

    return () => clearInterval(interval)

  }, [])

  const infoCards = [
    {
      icon: <FaUser />,
      label: 'Name',
      value: 'MOHAMMED MAFAZ T.S'
    },
    {
      icon: <FaBriefcase />,
      label: 'Experience',
      value: 'Fresher'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Karur,Tamil Nadu,India'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'mafaz9416@gmail.com'
    },
  ]

  return (

    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4">

            About{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>

          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >

            <p className="text-gray-300 text-lg leading-relaxed mb-10">

              I'm a{" "}

              <span className="text-purple-400 font-semibold">
                Backend Developer
              </span>

              {" "}specializing in Python, Django, and Django REST Framework, and SQL. I love building scalable web applications, clean APIs, and modern digital experiences with performance, security, and creativity in mind.

            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">

              {infoCards.map((card, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl p-5 hover:border-purple-500/40 transition-all duration-300"
                >

                  <div className="flex items-center gap-2 mb-2">

                    <span className="text-purple-400">
                      {card.icon}
                    </span>

                    <span className="text-gray-400 text-sm">
                      {card.label}
                    </span>

                  </div>

                  <h4 className="text-white font-semibold">
                    {card.value}
                  </h4>

                </motion.div>

              ))}

            </div>

            {/* Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(168,85,247,0.5)'
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold"
            >

              Let's Connect

              <BsArrowRight />

            </motion.a>

          </motion.div>

          {/* RIGHT SIDE PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-purple-600/20 rounded-full blur-[120px]" />

              {/* Outer Ring */}
              <div
                className="absolute inset-0 rounded-full p-[4px]"
                style={{
                  background: `conic-gradient(from ${rotation}deg,
                  #7c3aed,
                  #3b82f6,
                  #8b5cf6,
                  #6366f1,
                  #a855f7,
                  #7c3aed)`
                }}
              >

                <div className="w-full h-full rounded-full bg-[#050816]"></div>

              </div>

              {/* Second Ring */}
              <div
                className="absolute -inset-4 rounded-full p-[2px] opacity-50"
                style={{
                  background: `conic-gradient(from ${-rotation * 0.6}deg,
                  transparent 20%,
                  #a855f7,
                  transparent 80%)`
                }}
              >

                <div className="w-full h-full rounded-full bg-transparent"></div>

              </div>

              {/* Image Container */}
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.4)]">

                <img
                  src={profileImg}
                  alt="Mafaz"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => {

                const angle = (i * 60 + rotation * 0.5) * (Math.PI / 180)

                const radius = 220

                const x = Math.cos(angle) * radius

                const y = Math.sin(angle) * radius

                return (

                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-purple-400"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 15px rgba(168,85,247,0.8)'
                    }}
                  />

                )

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default About