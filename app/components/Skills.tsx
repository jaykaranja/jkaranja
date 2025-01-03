'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  icon: string
  description: string
  proficiency: number
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'cloud' | 'other'
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: '🟨', description: 'Proficient in modern JavaScript, including ES6+ features.', proficiency: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', description: 'Strong typing for scalable and maintainable applications.', proficiency: 85, category: 'frontend' },
  { name: 'React', icon: '⚛️', description: 'Building interactive and responsive user interfaces.', proficiency: 95, category: 'frontend' },
  { name: 'Next.js', icon: '▲', description: 'Server-side rendering and static site generation for React apps.', proficiency: 80, category: 'frontend' },
  { name: 'Angular', icon: '🅰️', description: 'Developing robust single-page applications.', proficiency: 75, category: 'frontend' },
  { name: 'Node.js', icon: '🟩', description: 'Backend development with JavaScript runtime.', proficiency: 85, category: 'backend' },
  { name: 'C#', icon: '🔵', description: 'Object-oriented programming for .NET applications.', proficiency: 80, category: 'backend' },
  { name: '.NET', icon: '🔷', description: 'Framework for building Windows and web applications.', proficiency: 75, category: 'backend' },
  { name: 'React Native', icon: '📱', description: 'Cross-platform mobile app development.', proficiency: 70, category: 'mobile' },
  { name: 'Redux', icon: '🔄', description: 'State management for JavaScript apps.', proficiency: 85, category: 'frontend' },
  { name: 'SQL', icon: '🗃️', description: 'Database querying and management.', proficiency: 80, category: 'database' },
  { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for modern applications.', proficiency: 75, category: 'database' },
  { name: 'AWS', icon: '☁️', description: 'Cloud computing services and solutions.', proficiency: 70, category: 'cloud' },
  { name: 'Azure', icon: '☁️', description: 'Microsoft\'s cloud computing platform.', proficiency: 75, category: 'cloud' },
  { name: 'Docker', icon: '🐳', description: 'Containerization for consistent development and deployment.', proficiency: 65, category: 'other' },
]

const categories = [
  { name: 'All', icon: '🌟' },
  { name: 'Frontend', icon: '🖥️' },
  { name: 'Backend', icon: '⚙️' },
  { name: 'Mobile', icon: '📱' },
  { name: 'Database', icon: '🗄️' },
  { name: 'Cloud', icon: '☁️' },
  { name: 'Other', icon: '🔧' },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory.toLowerCase())

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills & Technologies</h2>
        
        <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full ${selectedCategory === category.name ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg max-w-md w-full m-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{selectedSkill.name}</h3>
              <p className="text-gray-300 mb-4">{selectedSkill.description}</p>
              <div className="flex items-center">
                <span className="text-white mr-2">Proficiency:</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${selectedSkill.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-white ml-2">{selectedSkill.proficiency}%</span>
              </div>
              <button 
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

