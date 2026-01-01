"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ToolkitSection from "@/components/toolkit-section"
import AchievementsSection from "@/components/achievements-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // GSAP ScrollTrigger animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Dot pattern background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
