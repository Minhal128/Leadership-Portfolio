"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Trophy, Award, Target, Star, Medal, GraduationCap } from "lucide-react"

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const achievements = [
    {
      title: "Resume Competition Winner",
      description: "Won a Resume Competition organized by ASME Quest Chapter after competing against 40 individuals.",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      image: "/2.jpg?height=300&width=400",
      year: "2024",
    },
    {
      title: "National Internship Program Certificate",
      description:
        "Received a certificate of appreciation after completing my internship at National Internship Program, organized by Pakistan - U.S Alumni Network.",
      icon: <Award className="w-12 h-12 text-blue-500" />,
      image: "/3.jpg?height=300&width=400",
      year: "2024",
    },
    {
      title: "Best Brand Ambassador Award",
      description: "Won the 'Best Brand Ambassador' award as a Brand Ambassador of FAST Data Science Society.",
      icon: <Star className="w-12 h-12 text-purple-500" />,
      image: "/1.jpg?height=300&width=400",
      year: "2024",
    },
    {
      title: "DataQuest Competition - 3rd Prize",
      description:
        "Won 3rd Prize at a Data Visualization Competition named 'DataQuest' while participating as a Solo Competitor.",
      icon: <Medal className="w-12 h-12 text-orange-500" />,
      image: "/5.jpg?height=300&width=400",
      year: "2024",
    },
    {
      title: "Badge of Distinction - Top 10th Percentile",
      description:
        "Won a 'Badge of Distinction' from The Talent Games after getting ranked in the Top 10th Percentile Globally.",
      icon: <Target className="w-12 h-12 text-green-500" />,
      image: "/4.jpg?height=300&width=400",
      year: "2024",
    },
    {
      title: "Bridge Scholarship Recipient",
      description:
        "Received a national level scholarship from Aga Khan Board named as 'Bridge Scholarship' which covered the whole expenses of my intermediate education.",
      icon: <GraduationCap className="w-12 h-12 text-red-500" />,
      image: "/6.jpg?height=300&width=400",
      year: "2023",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [achievements.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">Key Achievements</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Milestones and recognitions that showcase my leadership and expertise in data analytics
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-red-600/30 p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        {achievements[currentIndex].icon}
                        <span className="ml-4 text-red-400 font-semibold">{achievements[currentIndex].year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{achievements[currentIndex].title}</h3>
                      <p className="text-gray-300 leading-relaxed">{achievements[currentIndex].description}</p>
                    </div>
                    <div className="relative">
                      <img
                        src={achievements[currentIndex].image || "/placeholder.svg"}
                        alt={achievements[currentIndex].title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
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
