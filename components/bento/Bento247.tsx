'use client'

import { motion } from 'framer-motion'
import { Clock, Moon, Sun } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function Bento247() {
  return (
    <Card variant="gradient" padding="lg" className="h-full text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={24} />
          <h3 className="text-2xl font-bold">Ouvert 24/7</h3>
        </div>

        <p className="text-white/90 text-lg mb-6">
          Votre boutique ne ferme jamais. Vos clients achètent même pendant votre sommeil.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sun size={32} className="mx-auto mb-2" />
            <div className="text-2xl font-bold">Jour</div>
            <div className="text-sm text-white/80">Actif</div>
          </motion.div>

          <motion.div
            className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Moon size={32} className="mx-auto mb-2" />
            <div className="text-2xl font-bold">Nuit</div>
            <div className="text-sm text-white/80">Actif</div>
          </motion.div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20">
          <p className="text-sm text-white/80">
            🌍 Accessible partout, tout le temps
          </p>
        </div>
      </div>
    </Card>
  )
}
