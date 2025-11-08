'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui'

const plans = [
  {
    name: 'Starter',
    tagline: 'Pour démarrer',
    price: '900',
    period: 'Paiement unique',
    description: 'Parfait pour les entrepreneurs et petites structures',
    popular: false,
    features: [
      { text: 'Site vitrine 5 pages', included: true },
      { text: 'Design responsive mobile/desktop', included: true },
      { text: 'SEO basique (score 80+)', included: true },
      { text: 'Formulaire de contact', included: true },
      { text: 'Hébergement 6 mois offert', included: true },
      { text: 'Support 30 jours', included: true },
      { text: 'Blog & CMS', included: false },
      { text: 'E-commerce', included: false },
      { text: 'Animations avancées', included: false },
      { text: 'Formation personnalisée', included: false },
    ],
    cta: 'Choisir Starter',
    href: '/demarrer-projet?plan=starter',
  },
  {
    name: 'Premium',
    tagline: 'Le plus populaire',
    price: '1 500',
    period: 'Paiement unique',
    description: 'Solution complète pour professionnels ambitieux',
    popular: true,
    savings: 'Économisez 800€',
    features: [
      { text: 'Site sur-mesure pages illimitées', included: true },
      { text: 'Design premium + 3 maquettes', included: true },
      { text: 'SEO avancé (score 95+)', included: true },
      { text: 'Blog professionnel + CMS intuitif', included: true },
      { text: 'Hébergement 1 AN OFFERT', included: true },
      { text: 'Domaine .com/.fr offert', included: true },
      { text: 'Support prioritaire 90 jours', included: true },
      { text: 'Bonus : Logo + 10 visuels RS', included: true },
    ],
    cta: 'Démarrer mon projet',
    href: '/demarrer-projet?plan=premium',
  },
  {
    name: 'Enterprise',
    tagline: 'Sur-mesure total',
    price: 'Sur devis',
    period: 'Projet personnalisé',
    description: 'Pour les entreprises avec besoins spécifiques',
    popular: false,
    features: [
      { text: 'Tout du plan Premium', included: true },
      { text: 'Application web complexe', included: true },
      { text: 'Plateforme SaaS/Marketplace', included: true },
      { text: 'API & intégrations sur-mesure', included: true },
      { text: 'Dashboard admin avancé', included: true },
      { text: 'Multi-langue & multi-devise', included: true },
      { text: 'Déploiement scaling automatique', included: true },
      { text: 'Support technique dédié 24/7', included: true },
      { text: 'Consultation stratégique mensuelle', included: true },
      { text: 'Maintenance & évolutions continues', included: true },
    ],
    cta: 'Demander un devis',
    href: '/contact',
  },
]

export function ComparisonCards() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Choisissez votre <span className="text-gradient">formule</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tarifs transparents, sans surprise. Tous nos plans incluent code source et propriété totale.
          </p>
        </motion.div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular
            const scaleFactor = isPopular ? 1.05 : 1

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`
                  relative h-full flex flex-col
                  ${isPopular ? 'md:-mt-4 md:mb-4' : ''}
                `}
                style={{ transform: `scale(${scaleFactor})` }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-2 rounded-full shadow-soft-lg font-semibold text-sm">
                      <Sparkles size={16} />
                      {plan.tagline}
                    </div>
                  </div>
                )}

                <div
                  className={`
                    flex-1 flex flex-col
                    bg-white rounded-card-lg p-8
                    transition-all duration-300
                    ${isPopular
                      ? 'border-2 border-primary-blue shadow-soft-xl ring-4 ring-primary-blue/10'
                      : 'border border-gray-200 shadow-soft hover:shadow-soft-lg hover:border-primary-blue/30'
                    }
                  `}
                >
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {plan.name}
                    </h3>
                    {!isPopular && (
                      <p className="text-sm text-text-secondary mb-4">
                        {plan.tagline}
                      </p>
                    )}

                    {/* Price */}
                    <div className="mt-4">
                      {plan.price === 'Sur devis' ? (
                        <div className="text-4xl font-bold text-text-primary">
                          Sur devis
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-gradient">
                            {plan.price}€
                          </span>
                        </div>
                      )}
                      <p className="text-sm text-text-secondary mt-1">
                        {plan.period}
                      </p>
                      {plan.savings && (
                        <p className="text-sm font-semibold text-green-600 mt-2">
                          {plan.savings}
                        </p>
                      )}
                    </div>

                    <p className="text-text-secondary mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <Link href={plan.href}>
                      <Button
                        variant={isPopular ? 'primary' : 'glass'}
                        size="lg"
                        className={`
                          w-full group
                          ${isPopular ? 'shadow-soft-lg hover:shadow-soft-xl' : ''}
                        `}
                      >
                        {plan.cta}
                        <ArrowRight className="h-5 w-5 transition-transform duration-micro group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                              <Check size={14} className="text-green-600" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <X size={14} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                        <span
                          className={`
                            text-sm leading-relaxed
                            ${feature.included
                              ? 'text-text-primary'
                              : 'text-text-secondary line-through'
                            }
                          `}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary">
            💬 Besoin d&apos;aide pour choisir ?
            <Link href="/contact" className="text-primary-blue font-semibold hover:underline ml-1">
              Contactez-nous pour un conseil gratuit
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
