import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'
import coderImg from "../assets/coder.png";
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/MAFAZ9416',
      label: 'GitHub'
    },

    {
      icon: <FaLinkedinIn size={20} />,
      href: 'https://www.linkedin.com/in/mohammed-mafaz-t-s-778602376/',
      label: 'LinkedIn'
    },

    {
      icon: <HiOutlineMail size={20} />,
      href: '#contact',
      label: 'Email'
    },

    {
      icon: <FaInstagram size={20} />,
      href: 'https://www.instagram.com/_mafaz__7/',
      label: 'Instagram'
    }
  ]

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center lg:text-left"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-[#0c1020]/60 backdrop-blur-xl mb-6"
            >

              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>

              <span className="text-sm text-purple-300 font-medium">
                Backend Developer
              </span>

            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >

              Hi, I'm{" "}

              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                Mafaz
              </span>

              <br />

              <TypeAnimation
                sequence={[
                  'Backend Developer',
                  3000,
                  'Django & Django REST Framework Specialist',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2"
              />

            </motion.h1>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >

              I build scalable, secure and high-performance web applications
              with Python, Django and modern backend technologies.

            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start mb-10"
            >

              {socialLinks.map((social, index) => (

                <motion.a
                  key={index}
                  href={social.href}

                  onClick={(e) => {

                    if (social.href === '#contact') {

                      e.preventDefault()

                      document
                        .querySelector('#contact')
                        ?.scrollIntoView({
                          behavior: 'smooth'
                        })

                    }

                  }}

                  target={social.href !== '#contact' ? "_blank" : undefined}

                  rel={social.href !== '#contact'
                    ? "noopener noreferrer"
                    : undefined
                  }

                  whileHover={{
                    y: -5,
                    boxShadow: '0 0 25px rgba(168,85,247,0.5)'
                  }}

                  whileTap={{ scale: 0.95 }}

                  className="w-12 h-12 rounded-xl border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl flex items-center justify-center text-white hover:text-purple-400 transition-all duration-300"
                >

                  {social.icon}

                </motion.a>

              ))}

            </motion.div>

            {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="grid grid-cols-3 gap-4 mt-8 mb-8 max-w-md mx-auto lg:mx-0"
>
  {[
    { value: "2+", label: "Internships" },
    { value: "5+", label: "Projects" },
    { value: "10+", label: "Certificates" },
  ].map((item) => (
    <motion.div
      key={item.label}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-purple-500/20
      rounded-2xl
      p-4
      text-center
      shadow-lg
      hover:shadow-purple-500/30
      transition-all
      duration-300
    "
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {item.value}
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        {item.label}
      </p>
    </motion.div>
  ))}
</motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >

              {/* View Work */}
              <motion.a
                href="#projects"

                onClick={(e) => {
                  e.preventDefault()

                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}

                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(168,85,247,0.6)'
                }}

                whileTap={{ scale: 0.97 }}

                className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold flex items-center gap-2"
              >

                View My Work

                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />

              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"

                onClick={(e) => {
                  e.preventDefault()

                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}

                whileHover={{ scale: 1.05 }}

                whileTap={{ scale: 0.97 }}

                className="px-7 py-4 rounded-2xl border border-purple-500/40 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >

                Contact Me

              </motion.a>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >

            {/* Main Glow */}
            <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-purple-600/20 rounded-full blur-[120px]" />

            {/* Outer Ring */}
            <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] border border-purple-500/30 rounded-full animate-spin-slow" />

            {/* Inner Ring */}
            <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-blue-500/20 rounded-full animate-pulse" />

            {/* Floating Cubes */}
            <div className="absolute top-10 left-10 w-5 h-5 bg-purple-500 rotate-12 rounded-md animate-float"></div>

            <div className="absolute top-32 right-16 w-6 h-6 bg-blue-500 rotate-45 rounded-md animate-float delay-200"></div>

            <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-500 rotate-12 rounded-md animate-float delay-500"></div>

            <div className="absolute bottom-10 right-24 w-5 h-5 bg-indigo-500 rotate-45 rounded-md animate-float delay-700"></div>

            {/* Platform Glow */}
            <div className="absolute bottom-0 w-[260px] md:w-[420px] h-12 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40 rounded-full"></div>

            {/* Coder Image */}
            <img
              src={coderImg}
              alt="Coder Illustration"
              className="relative z-10 w-[300px] sm:w-[400px] md:w-[520px] lg:w-[620px] object-contain animate-float"
            />

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >

        <span className="text-xs text-gray-500">
          Scroll
        </span>

        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1">

          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />

        </div>

      </motion.div>

    </section>

  )
}

export default Hero