'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, ArrowRight, Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTA_ADVANTAGES } from '@/lib/constants'

export function CTAFinal() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-animated opacity-95" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <Badge variant="outline" className="mb-6 text-white border-white/30">
            <Rocket size={16} />
            Prêt à démarrer ?
          </Badge>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Transformons votre vision en réalité
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discutons de votre projet et créons ensemble quelque chose d&apos;exceptionnel qui
            marquera les esprits.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/demarrer-projet">
              <Button
                variant="secondary"
                size="lg"
                className="group min-w-[220px] bg-white text-text-primary hover:bg-white/95 border-[3px] border-transparent bg-clip-padding relative hover:shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-button before:p-[3px] before:bg-gradient-to-r before:from-primary-blue before:to-primary-violet hover:before:opacity-100 before:opacity-80 transition-all"
              >
                <Rocket size={20} />
                Démarrer un projet
                <ArrowRight
                  size={20}
                  className="transition-transform duration-micro group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Link href="/projets">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[220px] text-white border-[3px] border-white hover:bg-white/20 hover:border-white"
              >
                <Briefcase size={20} />
                Voir mon portfolio
              </Button>
            </Link>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-white/10 mb-10" />

          {/* Advantages */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            {CTA_ADVANTAGES.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="text-2xl">{advantage.icon}</span>
                <span className="text-sm sm:text-base">{advantage.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
