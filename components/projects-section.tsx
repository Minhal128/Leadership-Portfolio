"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Globe, X } from "lucide-react"

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const impactAreas = [
    {
      id: 1,
      title: "🎓 Education Advocacy",
      icon: GraduationCap,
      summary: "Led and collaborated on youth-driven education initiatives focused on access, awareness and community engagement.",
      projects: [
        {
          name: "Azm-e-Naujawan – Social Action Project",
          role: "Team Lead",
          problem: "Lack of awareness about importance of education in underprivileged communities",
          actions: [
            "Led team of 5 members",
            "Designed awareness sessions",
            "Raised funds for the school fees of kids",
            "Conducted school/community outreach"
          ],
          impact: "Reached 10 underprivileged families and raised awareness about the importance of education."
        },
        {
          name: "Aspire Institute – Education Collaboration",
          role: "IT Domain Leader / Mentor",
          actions: [
            "Conducted session on Resume Writing",
            "Conducted a 4-week course on Microsoft Power BI",
            "Provided career guidance to university students"
          ],
          outcome: "100+ students taught and mentored"
        }
      ]
    },
    {
      id: 2,
      title: "🤝 Youth Mentorship",
      icon: Users,
      summary: "Youth Mentorship & Career Guidance through personalized 1:1 sessions and skill development programs.",
      projects: [
        {
          name: "Topmate Mentorship Platform",
          details: [
            "Conducted 1:1 mentorship sessions",
            "Guided students on data careers, LinkedIn optimization, resume writing and personal growth",
            "Total mentees: 80"
          ],
          focusAreas: [
            "Career clarity",
            "Skill roadmap",
            "Confidence building"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "🌍 Community & Environment",
      icon: Globe,
      summary: "Community Volunteering & Environmental Action through hands-on initiatives and awareness campaigns.",
      projects: [
        {
          name: "Beach Cleaning Drive – Society for International Education",
          role: "Volunteer",
          location: "Seaview, Clifton, Karachi, Pakistan",
          actions: [
            "Participated with high school students and US Consulate Professionals in cleanup drive"
          ],
          impact: [
            "Collected 100kg trash from the beach",
            "Spread awareness among students about cleanliness",
            "Led a group of 20 students in cleanup drive"
          ]
        }
      ]
    }
  ]

  const handleCardClick = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId)
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">Impact Areas</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Key areas where I've made meaningful contributions through leadership, mentorship, and community engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impactAreas.map((area) => {
            const Icon = area.icon
            const isFlipped = flippedCard === area.id
            
            return (
              <motion.div
                key={area.id}
                className="relative h-96 cursor-pointer"
                onClick={() => handleCardClick(area.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="front"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: 90 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Card className="bg-slate-800/50 border-blue-600/30 p-8 h-full flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-colors">
                        <Icon className="w-16 h-16 text-blue-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{area.summary}</p>
                        <div className="mt-6 text-blue-400 text-sm font-medium">Click to explore →</div>
                      </Card>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ rotateY: -90 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Card className="bg-slate-800/50 border-blue-600/30 p-6 h-full overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-white">{area.title}</h3>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              setFlippedCard(null)
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="space-y-6">
                          {area.projects.map((project, index) => (
                            <div key={index} className="border-l-2 border-blue-600 pl-4">
                              <h4 className="font-semibold text-blue-400 mb-2">{project.name}</h4>
                              
                              {project.role && (
                                <p className="text-sm text-gray-300 mb-2">
                                  <span className="font-medium">Role:</span> {project.role}
                                </p>
                              )}
                              
                              {project.location && (
                                <p className="text-sm text-gray-300 mb-2">
                                  <span className="font-medium">Location:</span> {project.location}
                                </p>
                              )}
                              
                              {project.problem && (
                                <p className="text-sm text-gray-300 mb-2">
                                  <span className="font-medium">Problem:</span> {project.problem}
                                </p>
                              )}
                              
                              {project.actions && (
                                <div className="mb-2">
                                  <span className="font-medium text-gray-300 text-sm">Actions:</span>
                                  <ul className="text-sm text-gray-400 mt-1 space-y-1">
                                    {project.actions.map((action, i) => (
                                      <li key={i}>• {action}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {project.details && (
                                <div className="mb-2">
                                  <ul className="text-sm text-gray-400 space-y-1">
                                    {project.details.map((detail, i) => (
                                      <li key={i}>• {detail}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {project.focusAreas && (
                                <div className="mb-2">
                                  <span className="font-medium text-gray-300 text-sm">Focus areas:</span>
                                  <ul className="text-sm text-gray-400 mt-1 space-y-1">
                                    {project.focusAreas.map((area, i) => (
                                      <li key={i}>• {area}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {project.impact && (
                                <p className="text-sm text-green-400">
                                  <span className="font-medium">Impact:</span> {project.impact}
                                </p>
                              )}
                              
                              {project.outcome && (
                                <p className="text-sm text-green-400">
                                  <span className="font-medium">Outcome:</span> {project.outcome}
                                </p>
                              )}
                              
                              {Array.isArray(project.impact) && (
                                <div>
                                  <span className="font-medium text-green-400 text-sm">Impact:</span>
                                  <ul className="text-sm text-green-400 mt-1 space-y-1">
                                    {project.impact.map((impact, i) => (
                                      <li key={i}>• {impact}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
