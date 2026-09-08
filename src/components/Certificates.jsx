import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCheck, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import backendInternship from "../assets/certificates/backend-internship.jpg";
import pythonInternship from "../assets/certificates/python-internship.jpg";
import djangoCert from "../assets/certificates/django.jpg";

import sqlBasic from "../assets/certificates/sql-basic.jpg";
import sqlIntermediate from "../assets/certificates/sql-intermediate.jpg";
import sqlAdvanced from "../assets/certificates/sql-advanced.jpg";

import pythonBeginner from "../assets/certificates/python-beginner.jpg";
import numpyCert from "../assets/certificates/numpy.jpg";
import pandasCert from "../assets/certificates/pandas.jpg";

import excelCert from "../assets/certificates/excel.jpg";
import powerbiCert from "../assets/certificates/powerbi.jpg";
import tableauCert from "../assets/certificates/tableau.jpg";
import problemSolvingIntermediate from "../assets/certificates/problemSolvingIntermediate.jpg";


export const certificates = [
  {
    id: 1,
    title: 'Python Backend Internship',
    issuer: 'Skywin Academy, Trichy',
    issuedBy: 'Mr. J. Akbar Badhusa',
    date: 'March 2026',
    image: pythonInternship,
    description: 'Completed a professional backend development internship focused on Python, REST APIs, database integration, and real-world project development.',
    skills: ['Python', 'Backend Development', 'REST APIs', 'Database Integration', 'Project Development'],
    certificateId: null,
    credentialUrl: 'https://drive.google.com/file/d/1ZDDLjdRq4VDnGGNik9ACzTxEelEaSHZN/view?usp=sharing',
  },
    {
    id: 2,
    title: "Python Backend Development Internship",
    issuer: "CodeBonding Technology",
    issuedBy: "Director, CodeBonding Technology",
    date: "01 June 2026",
    image: backendInternship,
    description:
        "Successfully completed a 5-day internship program in Python Backend Development and Real-Time Application Development. Gained practical experience in backend systems, APIs, database integration, and real-world application development.",
    skills: [
        "Python",
        "Backend Development",
        "Real-Time Applications",
        "REST APIs",
        "Database Integration",
        "Project Development"
    ],
    certificateId: "CB-2026-INT-063",
    credentialUrl: "https://drive.google.com/file/d/1jZlpU0AGZflrjfd4kLcR3M6VIRICQF_a/view?usp=sharing",
    }, 
  {
    id: 3,
    title: 'Python Django 101',
    issuer: 'Simplilearn SkillUp',
    issuedBy: null,
    date: '11 January 2026',
    image: djangoCert,
    description: 'Learned Django fundamentals including models, views, templates, routing, authentication, and backend web development.',
    skills: ['Django', 'Backend Development', 'Models', 'Views', 'Templates'],
    certificateId: '9704735',
    credentialUrl: 'https://drive.google.com/file/d/1cBmu0JWnTlLZW54I37hQEGKyZKm1Fm2g/view?usp=sharing',
  },
  {
    id: 4,
    title: 'SQL Basic',
    issuer: 'HackerRank',
    issuedBy: null,
    date: null,
    image: sqlBasic,
    description: 'Validated fundamental SQL skills including querying, filtering, sorting, and basic database operations.',
    skills: ['SQL', 'SELECT', 'WHERE', 'ORDER BY', 'Database Fundamentals'],
    certificateId: '7AOEDCC47B44',
    credentialUrl: 'https://www.hackerrank.com/certificates/7a0edcc47b44',
  },
  {
    id: 5,
    title: 'SQL Intermediate',
    issuer: 'HackerRank',
    issuedBy: null,
    date: null,
    image: sqlIntermediate,
    description: 'Demonstrated intermediate SQL knowledge including joins, aggregations, grouping, and relational database concepts.',
    skills: ['SQL Joins', 'GROUP BY', 'Aggregate Functions', 'Relational Databases'],
    certificateId: '92697147E436',
    credentialUrl: 'https://www.hackerrank.com/certificates/92697147e436',
  },
  {
    id: 6,
    title: 'SQL Advanced',
    issuer: 'HackerRank',
    issuedBy: null,
    date: null,
    image: sqlAdvanced,
    description: 'Showcased advanced SQL expertise including complex queries, window functions, and query optimization.',
    skills: ['Advanced SQL', 'Window Functions', 'Complex Queries', 'Query Optimization'],
    certificateId: 'A356BE8CF680',
    credentialUrl: 'https://www.hackerrank.com/certificates/a356be8cf680',
  },
  {
    id: 7,
    title: 'Python Course for Beginners With Certification: Mastering the Essentials',
    issuer: 'Scaler Topics',
    issuedBy: null,
    date: '22 June 2025',
    image: pythonBeginner,
    description: 'Completed a comprehensive Python course covering programming fundamentals, data structures, functions, loops, and problem-solving techniques.',
    skills: ['Python', 'Functions', 'Loops', 'Data Structures', 'Problem Solving'],
    certificateId: null,
    credentialUrl: 'https://drive.google.com/file/d/1ZDDLjdRq4VDnGGNik9ACzTxEelEaSHZN/view?usp=sharing',
  },
  {
    id: 8,
    title: 'Introduction to NumPy',
    issuer: 'Simplilearn SkillUp',
    issuedBy: null,
    date: '21 August 2025',
    image: numpyCert,
    description: 'Learned NumPy arrays, mathematical operations, scientific computing, and data manipulation techniques.',
    skills: ['NumPy', 'Arrays', 'Scientific Computing', 'Data Manipulation'],
    certificateId: '8830520',
    credentialUrl: 'https://drive.google.com/file/d/16w4wtlX7b1oUHEUBMfE7YGY3WkKnRbBL/view?usp=sharing',
  },
  {
    id: 9,
    title: 'Python Pandas Basics Course',
    issuer: 'Simplilearn SkillUp',
    issuedBy: null,
    date: '22 August 2025',
    image: pandasCert,
    description: 'Completed training in data analysis, cleaning, transformation, and manipulation using Pandas DataFrames.',
    skills: ['Pandas', 'Data Analysis', 'Data Cleaning', 'Data Transformation'],
    certificateId: '8835536',
    credentialUrl: 'https://drive.google.com/file/d/1xP2tiQ6RLKq1a3skxO6hwSPGzy8kj2CF/view?usp=sharing',
  },
  {
    id: 10,
    title: 'Business Analytics with Excel',
    issuer: 'Microsoft + Simplilearn SkillUp',
    issuedBy: null,
    date: '22 August 2025',
    image: excelCert,
    description: 'Developed practical Excel skills for business reporting, analytics, dashboards, and data-driven decision making.',
    skills: ['Excel', 'Business Analytics', 'Pivot Tables', 'Reporting'],
    certificateId: '8833500',
    credentialUrl: 'https://drive.google.com/file/d/1BmSczrOWwZS03AuAv5GZ7pqe8rCkDwKY/view?usp=sharing',
  },
  {
    id: 11,
    title: 'Power BI for Beginners',
    issuer: 'Microsoft + Simplilearn SkillUp',
    issuedBy: null,
    date: '22 August 2025',
    image: powerbiCert,
    description: 'Learned Power BI fundamentals including dashboard creation, reporting, visualization techniques, and business intelligence concepts.',
    skills: ['Power BI', 'Dashboards', 'Data Visualization', 'Business Intelligence'],
    certificateId: '8837131',
    credentialUrl: 'https://drive.google.com/file/d/1Q9Hz1086VENkSlnrcIiPTcceprjEN1Tb/view?usp=sharing',
  },
  {
    id: 12,
    title: 'Tableau Data Visualization Basics Tutorial',
    issuer: 'Simplilearn SkillUp',
    issuedBy: null,
    date: '22 August 2025',
    image: tableauCert,
    description: 'Completed Tableau fundamentals focused on creating interactive dashboards and effective data storytelling.',
    skills: ['Tableau', 'Dashboards', 'Data Visualization', 'Analytics'],
    certificateId: '8833937',
    credentialUrl: 'https://drive.google.com/file/d/14_FAYvvQPp6D53rrRV6jIuabfZayDp37/view?usp=sharing',
  },
  {
    id: 13,
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issuedBy: "Harishankaran K, CTO - HackerRank",
    date: "26 February 2026",
    image: problemSolvingIntermediate,
    description:
        "Successfully passed the HackerRank Problem Solving (Intermediate) Skill Certification Test. Demonstrated proficiency in algorithmic thinking, data structures, problem-solving techniques, and coding challenges involving real-world computational problems.",
    skills: [
        "Problem Solving",
        "Algorithms",
        "Data Structures",
        "Logical Reasoning",
        "Time Complexity Analysis",
        "Coding Challenges",
        "Debugging",
        "Python"
    ],
    certificateId: "60D429F8CE4D",
    credentialUrl: "https://www.hackerrank.com/certificates/60d429f8ce4d"
},
]

/* ─── Traveling Border Wrapper ──────────────────────────────────────────── */
const TravelingBorderCard = ({ children, className = '' }) => (
  <div className={`traveling-border-wrapper ${className}`}>
    <div className="traveling-border-ring" />
    <div className="traveling-border-inner">
      {children}
    </div>
  </div>
)

/* ─── Certificate Modal ─────────────────────────────────────────────────── */
export const CertificateModal = ({ cert, isOpen, onClose }) => {
  if (!cert) return null
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="
                relative
                z-10
                w-full
                max-w-[1000px]
                mx-auto
                max-h-[85vh]
                overflow-y-auto
            "
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            >
            {/* Glass card */}
            <div className="cert-modal-card">
              {/* Close */}
              <button
                onClick={onClose}
                className="
                    fixed
                    top-5
                    right-5
                    z-[9999]
                    w-12
                    h-12
                    rounded-full
                    bg-black/80
                    backdrop-blur-md
                    text-white
                    border
                    border-purple-500/30
                    flex
                    items-center
                    justify-center
                    "
                aria-label="Close modal"
                >
                <FaTimes size={18} />
                </button>
              {/* Image */}
              <div className="w-full flex justify-center bg-[#0b0620] rounded-t-3xl overflow-hidden">
                <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-auto object-contain"
                />
                </div>

              {/* Content */}
              <div className="cert-modal-body">
                {/* Header */}
                <div className="cert-modal-header">
                  <div className="cert-modal-check">
                    <FaCheck size={14} />
                  </div>
                  <div>
                    <h3 className="cert-modal-title">{cert.title}</h3>
                    <p className="cert-modal-issuer">{cert.issuer}</p>
                    {cert.issuedBy && (
                      <p className="text-xs text-gray-500 mt-0.5">Issued by {cert.issuedBy}</p>
                    )}
                  </div>
                </div>

                {/* Date — only if available */}
                {cert.date && (
                  <div className="cert-modal-row border-b border-purple-500/20 pb-4 mb-4">
                    <span className="cert-modal-label">Issue Date</span>
                    <span className="cert-modal-value">{cert.date}</span>
                  </div>
                )}

                {/* Description */}
                {cert.description && (
                  <div className="mb-4">
                    <p className="cert-modal-label mb-1">Description</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{cert.description}</p>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-4">
                  <p className="cert-modal-label mb-2">Skills Learned</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="project-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Credential ID — only if available */}
                {cert.certificateId && (
                  <div className="cert-modal-row border-b border-purple-500/20 pb-4 mb-4">
                    <span className="cert-modal-label">Credential ID</span>
                    <span className="cert-modal-value font-mono text-xs break-all">{cert.certificateId}</span>
                  </div>
                )}

                {/* Verify link */}
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-verify-full"
                >
                  <FaExternalLinkAlt size={13} />
                  Verify Credential
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Certificate Card ──────────────────────────────────────────────────── */
export const CertificateCard = ({ cert, onClick }) => (
  <TravelingBorderCard className="cert-card-container">
    <button
      onClick={() => onClick(cert)}
      className="cert-glass-card"
    >
      {/* Image */}
      <div className="cert-card-image-wrap">
        <div className="cert-card-image-overlay" />
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          className="cert-card-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="cert-card-body">
        <h3 className="cert-card-title">{cert.title}</h3>
        <p className="cert-card-issuer">{cert.issuer}</p>

        <div className="cert-verify-btn-wrap">
          <span className="btn-verify-card">
            <FaShieldAlt size={11} />
            Verify
          </span>
        </div>
      </div>
    </button>
  </TravelingBorderCard>
)

/* ─── Main Section ──────────────────────────────────────────────────────── */
const Certificates = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  const [selectedCert, setSelectedCert] = useState(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  // Double for seamless CSS marquee (track animates -50% = exactly 1 copy width)
  const doubled = [...certificates, ...certificates]

  return (
    <section id="certificates" className="relative py-20 md:py-32" ref={ref}>
      {/* BG Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Certification{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vault
            </span>
          </h2>
          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto" />
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <div className="marquee-viewport">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track certs-track">
          {doubled.map((cert, i) => (
            <div key={i} className="marquee-slide cert-slide">
              <CertificateCard cert={cert} onClick={setSelectedCert} />
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
            onClick={() => navigate('/certificates')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="view-all-btn view-all-btn-blue"
          >
            View All Certificates
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

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}

export default Certificates
