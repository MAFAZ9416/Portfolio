import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef()

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {

    e.preventDefault()

    setLoading(true)

    emailjs
      .sendForm(
        'service_oha3vxs',
        'template_s7agxr6',
        form.current,
        'kAMj46HIxxwrRCT0b'
      )

      .then(() => {

        setLoading(false)

        setSuccess(true)

        form.current.reset()

        setTimeout(() => {
          setSuccess(false)
        }, 4000)

      })

      .catch((error) => {

        setLoading(false)

        alert('Something went wrong.')

      })

  }

  return (

    <section
      id="contact"
      className="relative py-20 md:py-28"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">

            Contact{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>

          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="rounded-3xl border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl p-8">

            <h3 className="text-3xl font-bold text-white mb-6">

              Let's Work Together 🚀

            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">

              I'm open to internships, freelance work,
              backend development projects, and collaborations.

            </p>

            <div className="space-y-6">

              <div>

                <p className="text-purple-400 text-sm mb-1">
                  Email
                </p>

                <h4 className="text-white text-lg font-medium">
                  mafaz9416@gmail.com
                </h4>

              </div>

              <div>

                <p className="text-purple-400 text-sm mb-1">
                  Location
                </p>

                <h4 className="text-white text-lg font-medium">
                  Tamil Nadu, India
                </h4>

              </div>

              <div>

                <p className="text-purple-400 text-sm mb-1">
                  Role
                </p>

                <h4 className="text-white text-lg font-medium">
                  Backend Developer
                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            className="rounded-3xl border border-white/10 bg-[#0c1020]/70 backdrop-blur-xl p-8"
          >

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required

              className="w-full mb-5 px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none focus:border-purple-500"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required

              className="w-full mb-5 px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none focus:border-purple-500"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required

              className="w-full mb-5 px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none focus:border-purple-500 resize-none"
            />

            {/* Button */}
            <motion.button
              type="submit"

              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 25px rgba(168,85,247,0.4)'
              }}

              whileTap={{
                scale: 0.97
              }}

              disabled={loading}

              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-lg"
            >

              {loading ? 'Sending...' : 'Send Message'}

            </motion.button>

            {/* Success */}
            {success && (

              <p className="text-green-400 mt-5 text-center">

                Message sent successfully 🚀

              </p>

            )}

          </motion.form>

        </div>

      </div>

    </section>

  )

}

export default Contact