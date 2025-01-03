'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'Senior Software Engineer',
    company: 'Intsoft (K) Limited',
    description: 'Led modernization projects, implemented Micro-Frontends architecture, and established CI/CD pipelines.',
  },
  {
    id: 2,
    year: '2023',
    title: 'Software Engineer',
    company: 'Intsoft (K) Limited',
    description: 'Developed React Native mobile applications, optimized SQL Server stored procedures, and supported frontend development tasks.',
  },
  {
    id: 3,
    year: '2019',
    title: 'Web Development with Python (Django)',
    company: 'Zalego Institute of Technology',
    description: 'Completed course in web development using Python and Django framework.',
  },
  {
    id: 4,
    year: '2019',
    title: 'Android Development with Java',
    company: 'Zalego Institute of Technology',
    description: 'Completed course in Android app development using Java.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Journey</h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{event.year.split(' ')[0]}</h1>
              </div>
              <motion.div
                className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="mb-3 font-bold text-white text-xl">{event.title}</h3>
                <h4 className="mb-3 font-semibold text-blue-400 text-lg">{event.company}</h4>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

