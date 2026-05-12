import { useEffect, useRef, useMemo } from 'react'

const StarBackground = () => {
  const canvasRef = useRef(null)

  const stars = useMemo(() => {
    const arr = []
    for (let i = 0; i < 200; i++) {
      arr.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.0003 + 0.0001,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }
    return arr
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      time += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7
        const currentOpacity = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.size,
          0,
          Math.PI * 2
        )

        const gradient = ctx.createRadialGradient(
          star.x * canvas.width,
          star.y * canvas.height,
          0,
          star.x * canvas.width,
          star.y * canvas.height,
          star.size * 2
        )
        gradient.addColorStop(0, `rgba(139, 92, 246, ${currentOpacity})`)
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${currentOpacity * 0.5})`)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      resizeObserver.disconnect()
    }
  }, [stars])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default StarBackground
