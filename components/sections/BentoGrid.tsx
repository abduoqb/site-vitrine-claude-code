'use client'

import { motion } from 'framer-motion'
import { BentoSales } from '@/components/bento/BentoSales'
import { Bento247 } from '@/components/bento/Bento247'
import { BentoCompetition } from '@/components/bento/BentoCompetition'
import { Badge } from '@/components/ui/Badge'
import { Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function BentoGrid() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="default" icon={<Sparkles size={16} />} className="mb-4">
            Pourquoi investir dans un site web
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Boostez votre business
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un site web professionnel transforme votre entreprise et multiplie vos opportunités de vente
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Sales Card - Large, takes full height on left */}
          <motion.div variants={itemVariants} className="md:row-span-2">
            <BentoSales />
          </motion.div>

          {/* 24/7 Card - Top right */}
          <motion.div variants={itemVariants}>
            <Bento247 />
          </motion.div>

          {/* Competition Card - Bottom right */}
          <motion.div variants={itemVariants}>
            <BentoCompetition />
          </motion.div>
        </motion.div>

        {/* Bottom CTA Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">81%</div>
            <p className="text-sm text-text-secondary">
              des consommateurs recherchent en ligne avant d'acheter
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <p className="text-sm text-text-secondary">
              Votre site travaille pour vous sans interruption
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">+300%</div>
            <p className="text-sm text-text-secondary">
              Augmentation moyenne de la visibilité en ligne
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
