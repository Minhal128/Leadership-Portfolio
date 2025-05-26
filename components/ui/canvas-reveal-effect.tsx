"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface CanvasRevealEffectProps {
  animationSpeed?: number
  containerClassName?: string
  colors?: number[][]
  dotSize?: number
}

export function CanvasRevealEffect({
  animationSpeed = 0.4,
  containerClassName,
  colors = [[255, 255, 255]],
  dotSize = 1,
}: CanvasRevealEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001 * animationSpeed

      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2)
          const wave = Math.sin(distance * 0.02 - time * 2) * 0.5 + 0.5

          const colorIndex = Math.floor(wave * colors.length)
          const color = colors[Math.min(colorIndex, colors.length - 1)]

          ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${wave * 0.8})`
          ctx.beginPath()
          ctx.arc(x, y, dotSize * wave, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    if (isVisible) {
      animate()
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [isVisible, animationSpeed, colors, dotSize])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 ${containerClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}
