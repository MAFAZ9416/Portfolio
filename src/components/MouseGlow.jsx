import { useEffect, useState } from 'react'

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="mouse-glow hidden md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default MouseGlow
