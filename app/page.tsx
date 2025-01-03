'use client'

import { useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute('href')
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => link.addEventListener('click', smoothScroll))

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll))
    }
  }, [])

  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  )
}

