"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "abidhassanjaffri31@gmail.com",
      href: "mailto:abidhassanjaffri31@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+92 310 8421235",
      href: "tel:+92 310 8421235",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "https://www.google.com/maps/place/Karachi/data=!4m2!3m1!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23?sa=X&ved=1t:242&ictx=111",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Ready to Connect</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Open to collaborations, mentorship, and impact-driven opportunities.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your data into actionable insights? Reach out and let's discuss your project!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mx-auto`}>
                        <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center relative">
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gray-100 transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                        {item.value}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/20 group-hover:via-transparent group-hover:to-blue-500/20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}