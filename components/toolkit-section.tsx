"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function ToolkitSection() {
  const tools = [
    { name: "SQL Server", icon: "🗄️", color: "from-blue-600 to-blue-800" },
    { name: "MySQL", icon: "🐬", color: "from-orange-600 to-orange-800" },
    { name: "Python", icon: "🐍", color: "from-yellow-600 to-yellow-800" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-blue-900" },
    { name: "Tableau", icon: "📊", color: "from-blue-500 to-blue-700" },
    { name: "Power BI", icon: "⚡", color: "from-yellow-500 to-yellow-700" },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">My Toolkit</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Powerful tools and technologies I use to transform data into insights
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-gray-900/50 border-red-600/30 p-6 text-center h-32 flex flex-col items-center justify-center group hover:bg-red-600/10 transition-colors duration-300">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                <h3 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors duration-300">
                  {tool.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
