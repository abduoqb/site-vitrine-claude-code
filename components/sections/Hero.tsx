'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-violet/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <Badge variant="default" icon={<Sparkles size={16} />}>
            Disponible pour nouveaux projets
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary mb-6"
        >
          Créons quelque chose{' '}
          <span className="text-gradient">d&apos;extraordinaire</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformons ensemble vos idées en expériences digitales uniques et mémorables qui
          marquent les esprits et propulsent votre activité.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projets">
            <Button variant="primary" size="lg" className="group min-w-[200px]">
              Voir mes projets
              <ArrowRight
                size={20}
                className="transition-transform duration-micro group-hover:translate-x-1"
              />
            </Button>
          </Link>
          <Link href="/projets">
            <Button variant="glass" size="lg" className="group min-w-[200px]">
              <Mail size={20} />
              Me contacter
            </Button>
          </Link>
        </motion.div>

        {/* Stats or features (optional) */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '50+', label: 'Projets réalisés' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: '24/7', label: 'Support disponible' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
