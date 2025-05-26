"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react"

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "Taleem e Aam (Education for Everyone)",
      description:
        "Engaged with local communities, including visits to 15 lower-middle-class households and interactions with 5 local vendors, to raise awareness about the importance of education and encourage school enrollment for their children. Organized a door-to-door campaign to collect funds from local residents and shop owners for children's school fees. Reached out to 10 nearby schools to secure admissions for children whose families were convinced by myself to prioritize education.",
      image: "/7.jpg?height=400&width=600",
      year: "2016",
    },
    {
      title: "Knorr Flavorverse",
      description:
        "Led a team of three members to brainstorm and develop rebranding ideas for Knorr noodles to position it as the top choice for experimental food lovers. Conducted weekly meetings to track project progress, assign tasks, and ensure timely completion by all team members. Designed and finalized the presentation slides to ensure clarity and team alignment by incorporating feedback gathered through collaborative discussions. Finalized and submitted the presentation after discussing it with the team to ensure clarity and consistency. Secured a spot in the Top 50 of Unilever Talent Hunt 2025 to demonstrate our cross-disciplinary skills despite coming from a computer science background.",
      image: "/8.jpg?height=400&width=600",
      year: "2025",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [projects.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Community-driven initiatives that demonstrate leadership impact and social responsibility
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-red-600/30 p-8 min-h-[500px]">
                  <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                    {/* Left side - Project details */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 p-3 rounded-full">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-red-400 font-semibold text-lg">{projects[currentIndex].year}</span>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white mb-6">{projects[currentIndex].title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">{projects[currentIndex].description}</p>
                      </div>
                    </div>

                    {/* Right side - Project image */}
                    <div className="relative">
                      <div className="bg-gray-700 rounded-lg overflow-hidden aspect-video">
                        <img
                          src={projects[currentIndex].image || "/placeholder.svg"}
                          alt={projects[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
