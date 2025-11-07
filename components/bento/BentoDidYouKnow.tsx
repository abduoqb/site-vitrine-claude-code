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
      className="bg-gradient-animated group relative overflow-hidden rounded-card-lg p-8 shadow-soft-lg md:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        scale: 1.01,
        boxShadow: '0 24px 50px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.32, ease: 'easeOut' },
      }}
    >
      {/* Decorative blurred orbs */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">
        {/* Icon Header */}
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
            <Lightbulb size={20} className="text-white" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Le saviez-vous ?
          </span>
        </div>

        {/* Two Column Stats */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 rounded-xl bg-white/15 p-3 backdrop-blur-sm transition-colors duration-micro group-hover:bg-white/25">
              <TrendingUp size={28} className="text-white" />
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">81%</div>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                des consommateurs recherchent en ligne avant dacheter
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
            <div className="flex-shrink-0 rounded-xl bg-white/15 p-3 backdrop-blur-sm transition-colors duration-micro group-hover:bg-white/25">
              <Clock size={28} className="text-white" />
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">24/7</div>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                Votre site travaille pour vous sans interruption
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-8 border-t border-white/20 pt-6"
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
