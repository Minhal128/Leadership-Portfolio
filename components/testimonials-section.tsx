"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder testimonials - you can replace with actual content
  const testimonials = [
    {
      name: "Student Mentee",
      role: "Data Science Student",
      content: "Abid's mentorship was transformative. His guidance on LinkedIn optimization and career clarity helped me land my first data science role.",
      rating: 5
    },
    {
      name: "Community Member",
      role: "Education Advocate",
      content: "Working with Abid on the Azm-e-Naujawan project showed me his dedication to education and community development. His leadership is inspiring.",
      rating: 5
    },
    {
      name: "Fellow Mentor",
      role: "Career Coach",
      content: "Abid's approach to mentorship is both professional and empathetic. His impact on young professionals is remarkable.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">Testimonials & Feedback</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What people say about working with me and the impact of our collaborations
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
                <Card className="bg-slate-800/50 border-blue-600/30 p-8 text-center">
                  <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="text-center">
                    <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-400 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}