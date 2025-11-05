'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const technologies = [
  { name: 'Next.js', color: 'from-black to-gray-700' },
  { name: 'React', color: 'from-blue-400 to-blue-600' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
  { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
  { name: 'Framer', color: 'from-purple-500 to-pink-500' },
  { name: 'Vercel', color: 'from-black to-gray-800' },
]

export function BentoTech() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
          <Code2 size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Stack moderne</h3>
          <p className="text-sm text-text-secondary">Technologies de pointe</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`bg-gradient-to-br ${tech.color} px-4 py-3 rounded-lg text-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          💎 Technologies éprouvées pour un résultat professionnel
        </p>
      </div>
    </Card>
  )
}
