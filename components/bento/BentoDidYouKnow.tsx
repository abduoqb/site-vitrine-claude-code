'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Clock } from 'lucide-react'

/**
 * BentoDidYouKnow - Full-width card with animated gradient
 * Features:
 * - Slow animated gradient background (8-12s)
 * - Two-column stat layout
 * - Icon header
 * - White/indigo text
 */
export function BentoDidYouKnow() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-card-lg p-8 md:p-10 bg-gradient-animated shadow-soft-lg group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        scale: 1.01,
        boxShadow: '0 24px 50px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.32, ease: 'easeOut' }
      }}
    >
      {/* Decorative blurred orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Icon Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
            <Lightbulb size={20} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-white/90 uppercase tracking-wide">
            Le saviez-vous ?
          </span>
        </div>

        {/* Two Column Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 p-3 rounded-xl bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-colors duration-micro">
              <TrendingUp size={28} className="text-white" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                81%
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                des consommateurs recherchent en ligne avant d'acheter
              </p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 p-3 rounded-xl bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-colors duration-micro">
              <Clock size={28} className="text-white" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                24/7
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Votre site travaille pour vous sans interruption
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-8 pt-6 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-white/80">
            ✨ Une présence en ligne professionnelle augmente significativement votre crédibilité
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
