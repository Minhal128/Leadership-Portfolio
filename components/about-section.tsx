"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function AboutSection() {
  const skills = ["Leadership Development", "Data Analytics", "Community Engagement", "Teaching & Mentoring"]

  const skillDescriptions = [
    "Cultivating leadership skills through various programs and initiatives.",
    "Analyzing and interpreting data to drive informed decision-making.",
    "Actively participating in community development projects.",
    "Guiding and mentoring others in their learning journey.",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
            I am a passionate and purpose-driven individual committed to empowering youth and fostering positive change.
            Through programs like the Aspire Leaders Program and the Google Soft Skills Program, I've honed my
            leadership and communication skills. My active participation in initiatives such as the Youth Parliament
            Pakistan and Azm-e-Naujawan reflects my dedication to civic engagement and community development. As a Data
            Teaching Assistant, I have worked with professionals and professors, directly learning from their
            experience. I believe in leading by example and continuously strive to inspire others through action and
            integrity.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-900/50 border-red-600/30 p-6 h-full">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Skills</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill} className="border-l-2 border-red-600 pl-4">
                    <h4 className="font-semibold text-white">{skill}</h4>
                    <p className="text-gray-400 text-sm">{skillDescriptions[index]}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-900/50 border-red-600/30 p-6 h-full">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Data Teaching Assistant</h4>
                  <p className="text-gray-400 text-sm">Worked with professionals and professors.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Brand Ambassador - FAST Data Science Society</h4>
                  <p className="text-gray-400 text-sm">Represented and promoted the Data Science Society.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Youth Parliament Pakistan</h4>
                  <p className="text-gray-400 text-sm">Active participation in parliamentary proceedings.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Azm-e-Naujawan Initiative</h4>
                  <p className="text-gray-400 text-sm">Dedicated to civic engagement and community development.</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-900/50 border-red-600/30 p-6 h-full">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Aspire Leaders Program</h4>
                  <p className="text-gray-400 text-sm">Honed leadership and communication skills.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Google Soft Skills Program</h4>
                  <p className="text-gray-400 text-sm">Enhanced soft skills through Google's program.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Bridge Scholarship Recipient</h4>
                  <p className="text-gray-400 text-sm">Received the Bridge Scholarship.</p>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <h4 className="font-semibold text-white">Data Science Specialization</h4>
                  <p className="text-gray-400 text-sm">Completed a Data Science Specialization.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
