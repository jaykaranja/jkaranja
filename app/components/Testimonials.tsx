'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'James is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    content: 'Working with James has been a game-changer for our team. His technical expertise and ability to mentor others have significantly improved our productivity.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    content: 'James has an incredible eye for design and user experience. His ability to translate designs into functional, beautiful interfaces is unparalleled.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">What People Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-gray-200 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

