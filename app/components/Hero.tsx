'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ y }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          James Karanja
        </motion.h1>
        <motion.div
          className="text-2xl md:text-4xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Senior Software Engineer',
              2000,
              'React & Angular Specialist',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-300"
          />
        </motion.div>
        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Skilled Software Engineer with 3 years of experience designing, developing, and
          maintaining high-performing web applications. Specializing in JavaScript, TypeScript,
          and modern frameworks like React and Angular to deliver scalable, responsive solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 transform inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#skills" className="text-white text-4xl">↓</a>
      </motion.div>
    </section>
  )
}

