'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    title: 'Legacy ERP System Modernization',
    description: 'Led the transformation of a legacy ERP system from WinForms to a modern React-based frontend.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'UX Design', 'Performance Optimization'],
    details: 'Spearheaded the migration of a legacy ERP system from WinForms to React, implementing a comprehensive UX overhaul. This modernization significantly improved the user experience and reduced load times by 40%, showcasing expertise in both frontend development and performance optimization.'
  },
  {
    title: 'Micro-Frontend Architecture Implementation',
    description: 'Introduced and implemented Micro-Frontend architecture, improving development efficiency.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Micro-Frontends', 'React', 'Angular', 'Architecture'],
    details: 'Led the adoption of Micro-Frontend architecture, which resulted in a 30% reduction in development and maintenance time. This project demonstrated skills in modern web architecture, scalability, and improving overall development workflow.'
  },
  {
    title: 'React Native Mobile Applications',
    description: 'Developed mobile applications for Order to Cash, Inventory, and Performance Management.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React Native', 'Mobile Development', 'Performance'],
    details: 'Built mobile applications using React Native, including Order to Cash, Inventory, and Performance Management systems. These applications improved accessibility by 10%, showcasing skills in cross-platform mobile development and user-centric design.'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project.title)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-600 text-white text-sm rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedProject && (
          <motion.div
            className="mt-8 bg-gray-700 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-2">{selectedProject}</h3>
            <p>{projects.find(p => p.title === selectedProject)?.details}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

