import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const FloatingCube = ({ position, size = 0.3, speed = 1, color = '#8b5cf6' }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

const NeonRing = ({ radius = 2, color = '#8b5cf6', speed = 1 }) => {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
      ringRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

const AnimatedSphere = () => {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={sphereRef} scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#4c1d95"
          emissive="#7c3aed"
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  )
}

const GlowingPlatform = () => {
  const platformRef = useRef()

  useFrame((state) => {
    if (platformRef.current) {
      platformRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={platformRef} position={[0, -1.5, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2, 64]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.05, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#a855f7" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 0, 3]} intensity={0.3} color="#8b5cf6" />

      <AnimatedSphere />
      <GlowingPlatform />

      <NeonRing radius={2.5} color="#8b5cf6" speed={0.8} />
      <NeonRing radius={3} color="#6366f1" speed={0.5} />

      <FloatingCube position={[2.5, 1.5, -1]} size={0.25} speed={1.2} color="#a855f7" />
      <FloatingCube position={[-2.5, -1, -1]} size={0.2} speed={0.8} color="#6366f1" />
      <FloatingCube position={[1.5, -1.5, 0]} size={0.15} speed={1.5} color="#3b82f6" />
      <FloatingCube position={[-1.8, 1.8, -0.5]} size={0.18} speed={1} color="#7c3aed" />
      <FloatingCube position={[0.5, 2.2, -1.5]} size={0.12} speed={1.3} color="#818cf8" />

      <Sparkles count={50} scale={6} size={1.5} speed={0.4} color="#a855f7" />
    </Canvas>
  )
}

export default Scene3D
