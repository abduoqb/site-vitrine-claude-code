'use client'

import { motion } from 'framer-motion'
import { Rocket, Palette, Code, TrendingUp, Target, DollarSign } from 'lucide-react'

const timelineSteps = [
  {
    icon: Palette,
    period: 'Semaine 1-2',
    title: 'Conception & Design',
    description: 'Maquettes personnalisées, charte graphique, architecture UX',
    metric: '3 propositions',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Code,
    period: 'Semaine 3-4',
    title: 'Développement',
    description: 'Intégration complète, animations, fonctionnalités avancées',
    metric: '100% sur-mesure',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Rocket,
    period: 'Mois 1',
    title: 'Lancement & Optimisation',
    description: 'Mise en ligne, SEO technique, formation, tests de performance',
    metric: 'Score 95+/100',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    period: 'Mois 1-3',
    title: 'Croissance du trafic',
    description: 'Indexation Google, visibilité organique, première vague de visiteurs',
    metric: '+250% trafic moyen',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    period: 'Mois 3-6',
    title: 'Conversion & Engagement',
    description: 'Optimisation entonnoir, A/B testing, stratégie contenus',
    metric: '+180% leads',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: DollarSign,
    period: 'Mois 6+',
    title: 'ROI Positif',
    description: 'Rentabilité atteinte, croissance continue, évolutions stratégiques',
    metric: '5-10x retour',
    color: 'from-emerald-500 to-emerald-600',
  },
]

export function ValueTimeline() {
  return (
    <section className="py-20 px-6 relative bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Votre parcours vers le <span className="text-gradient">succès</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Du brief initial au ROI positif : découvrez les étapes concrètes et les résultats mesurables
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 opacity-20" />

          {/* Timeline Steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`
                    relative flex items-center gap-8
                    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Content Card */}
                  <div className={`
                    flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}
                    ml-20 md:ml-0
                  `}>
                    <div className="bg-white rounded-card-lg p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100">
                      {/* Period Badge */}
                      <div className={`
                        inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3
                        bg-gradient-to-r ${step.color} text-white
                      `}>
                        {step.period}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Metric */}
                      <div className={`
                        inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-gradient-to-r ${step.color} bg-opacity-10
                      `}>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500" />
                        <span className="font-bold text-text-primary">
                          {step.metric}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle (center) */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                      className={`
                        w-16 h-16 rounded-full
                        bg-gradient-to-br ${step.color}
                        flex items-center justify-center
                        shadow-soft-lg
                        relative z-10
                      `}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                  </div>

                  {/* Spacer for layout balance on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 p-8 rounded-card-lg bg-gradient-to-br from-primary-blue/5 to-primary-purple/5 border border-primary-blue/10"
        >
          <p className="text-lg text-text-primary font-semibold mb-2">
            📊 Résultats moyens de nos clients sur 6 mois
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">+250%</div>
              <div className="text-sm text-text-secondary mt-1">Trafic organique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">+180%</div>
              <div className="text-sm text-text-secondary mt-1">Génération leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5-10x</div>
              <div className="text-sm text-text-secondary mt-1">Retour investissement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
