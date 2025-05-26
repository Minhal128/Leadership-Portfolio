"use client"

import { useState, useEffect, useRef } from "react"

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: "hover" | "view"
  revealDirection?: "left" | "right" | "center"
}

export default function DecryptedText({
  text,
  speed = 20,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  revealDirection = "left",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const elementRef = useRef<HTMLSpanElement>(null)

  const animate = () => {
    if (isAnimating) return

    setIsAnimating(true)
    let iteration = 0

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        return text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")
      })

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        setIsAnimating(false)
        setDisplayText(text)
      }

      iteration += 1 / maxIterations
    }, speed)
  }

  useEffect(() => {
    if (animateOn === "view" && !hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate()
              setHasAnimated(true)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current)
        }
      }
    }
  }, [animateOn, hasAnimated])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      animate()
    }
  }

  return (
    <span
      ref={elementRef}
      className={`${parentClassName} ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ fontFamily: "monospace" }}
    >
      {displayText}
    </span>
  )
}
