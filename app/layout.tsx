import './styles/globals.css'
import { Inter } from 'next/font/google'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Karanja | Creative Developer Portfolio',
  description: 'Explore the innovative projects and skills of James Karanja, a passionate and creative developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <ParticleBackground />
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'