'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()
  const numParticles = 5000

  const positions = new Float32Array(numParticles * 3)
  const velocities = new Float32Array(numParticles * 3)
  for (let i = 0; i < numParticles; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
    velocities[i3] = (Math.random() - 0.5) * 0.01
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.01
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.01
  }

  useFrame((state) => {
    for (let i = 0; i < numParticles; i++) {
      const i3 = i * 3
      ref.current.geometry.attributes.position.array[i3] += velocities[i3]
      ref.current.geometry.attributes.position.array[i3 + 1] += velocities[i3 + 1]
      ref.current.geometry.attributes.position.array[i3 + 2] += velocities[i3 + 2]

      // Boundary check and velocity reversal
      for (let j = 0; j < 3; j++) {
        if (Math.abs(ref.current.geometry.attributes.position.array[i3 + j]) > 5) {
          velocities[i3 + j] *= -1
        }
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.x = mouse.y * 0.2
    ref.current.rotation.y = mouse.x * 0.2
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8080ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

