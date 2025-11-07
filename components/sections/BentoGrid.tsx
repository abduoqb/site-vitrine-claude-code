'use client'

import { motion } from 'framer-motion'
import { BentoSales } from '@/components/bento/BentoSales'
import { Bento247 } from '@/components/bento/Bento247'
import { BentoCompetition } from '@/components/bento/BentoCompetition'
import { BentoDidYouKnow } from '@/components/bento/BentoDidYouKnow'
import { Container, Section } from '@/components/ui'
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
    <Section id="features" spacing="default">
      <Container>
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
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Boostez votre business
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Un site web professionnel transforme votre entreprise et multiplie vos opportunités de vente
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetric 2x3 Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Sales Card - Large, takes full height on left (row-span-2) */}
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

        {/* "Le saviez-vous ?" Card - Full width at bottom */}
        <motion.div
          className="mt-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <BentoDidYouKnow />
        </motion.div>
      </Container>
    </Section>
  )
}
