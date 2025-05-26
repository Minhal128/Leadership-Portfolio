"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BarChart3, PieChart, Database, Warehouse } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Data Analysis",
      icon: <BarChart3 className="h-10 w-10" />,
      description:
        "Comprehensive data analysis to extract meaningful insights from your raw data and drive business decisions.",
    },
    {
      title: "Data Visualization",
      icon: <PieChart className="h-10 w-10" />,
      description: "Can make appealing and insightful dashboards of your data that tell compelling stories.",
    },
    {
      title: "Data Modelling",
      icon: <Database className="h-10 w-10" />,
      description: "Building robust data models that accurately represent your business processes and relationships.",
    },
    {
      title: "Data Warehousing",
      icon: <Warehouse className="h-10 w-10" />,
      description: "Designing and implementing efficient data warehouses for optimal data storage and retrieval.",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tighter text-red-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-gray-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive data solutions designed to transform your business operations and unlock insights
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  icon,
  description,
  index,
}: {
  title: string
  icon: React.ReactNode
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="border border-red-600/30 bg-gray-900/50 h-[24rem] relative overflow-hidden group">
        {/* Full dotted background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #dc2626 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/40" />

        <div className="relative z-20 p-6 text-center h-full flex flex-col justify-center">
          <div className="text-red-500 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-white text-xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>
          <motion.button
            className="mt-auto px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </Card>
    </motion.div>
  )
}
