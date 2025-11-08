'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Pourquoi ce prix alors que des templates existent à 50€ ?',
    answer: 'Un template nécessite 40-60h de personnalisation pour être professionnel et unique. Notre solution clé en main inclut : design sur-mesure (valeur 800€), développement optimisé SEO (valeur 1200€), intégrations business (valeur 600€), hébergement premium 1 an (120€), formation et support (300€). Total : 3020€ de valeur pour 1500€. Vous économisez 800€ vs. agences traditionnelles tout en gardant 100% propriété du code.',
  },
  {
    question: 'Combien de temps pour avoir mon site en ligne ?',
    answer: 'Livraison garantie sous 21 jours maximum. Planning type : Semaine 1 (brief & maquettes), Semaine 2 (développement), Semaine 3 (optimisation & formation). Mise en ligne dès validation de votre part. Support prioritaire inclus pendant 90 jours pour tout ajustement.',
  },
  {
    question: 'Que se passe-t-il après la livraison ?',
    answer: '1) Vous recevez le code source complet (propriété totale), 2) Formation vidéo 2h pour gérer votre contenu, 3) Support prioritaire 90 jours (réponse < 24h), 4) Modifications gratuites pendant 30 jours, 5) Sauvegardes automatiques quotidiennes, 6) Option maintenance évolutive disponible (non obligatoire).',
  },
  {
    question: 'Suis-je vraiment propriétaire du site et du code ?',
    answer: 'OUI, 100% de propriété dès paiement final. Vous recevez : code source complet sur GitHub, accès admin total, fichiers de design (Figma), documentation technique, droits de modification et revente illimités. Aucune dépendance à notre infrastructure. Vous pouvez migrer où vous voulez, quand vous voulez.',
  },
  {
    question: 'Quelle différence avec une agence traditionnelle ?',
    answer: 'Agences : 3000-8000€, délais 2-4 mois, multiples intermédiaires, code souvent propriétaire. Nous : 1500€ (Premium), livraison 3 semaines, développeur senior dédié, code source fourni, technologies modernes (Next.js, pas WordPress), performances garanties (score 95+), communication directe sans commerciaux.',
  },
  {
    question: 'Quelles garanties ai-je ?',
    answer: '1) Satisfait ou remboursé 30 jours sans justification, 2) Livraison sous 21 jours contractuelle, 3) Score SEO 95+ garanti ou on optimise gratuitement, 4) Zéro frais caché (prix TTC définitif), 5) RGPD compliant et sécurité SSL incluse, 6) Code source fourni (pas de lock-in), 7) Support prioritaire 90 jours.',
  },
  {
    question: 'Puis-je demander des modifications après livraison ?',
    answer: 'Oui ! Modifications gratuites pendant 30 jours post-livraison (contenu, couleurs, ajustements design). Après : support technique gratuit 90 jours pour bugs/problèmes. Pour évolutions majeures (nouvelles fonctionnalités) : tarif horaire préférentiel 60€/h ou forfaits maintenance mensuels dès 150€/mois.',
  },
  {
    question: 'Dois-je avoir des compétences techniques pour gérer mon site ?',
    answer: 'NON, zéro compétence technique requise. Formation vidéo 2h incluse pour : modifier textes/images via CMS intuitif, ajouter articles blog, gérer produits e-commerce, consulter statistiques. Interface aussi simple que Word. Pour modifications avancées : support prioritaire disponible ou nous le faisons pour vous.',
  },
  {
    question: 'Le Pack Premium inclut-il vraiment tout ce qui est listé ?',
    answer: 'OUI, 100% de ce qui est listé est inclus dans les 1500€. Aucun frais caché ni supplément surprise. Seuls coûts futurs possibles (optionnels) : renouvellement hébergement après 1 an (10€/mois), nom de domaine après 1 an (12€/an), maintenance évolutive si vous souhaitez de nouvelles fonctionnalités.',
  },
  {
    question: 'Puis-je migrer mon site existant vers votre solution ?',
    answer: 'Oui, migration incluse ! Nous récupérons votre contenu actuel (textes, images, articles), recréons votre site avec design moderne et performances optimisées, conservons votre SEO existant et améliorons vos positions Google. Redirection 301 automatique pour préserver historique. Aucune interruption de service.',
  },
]

export function FAQOffre() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 relative bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Toutes les réponses à vos interrogations sur notre Pack Premium
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`
                bg-white rounded-card-lg border-2 transition-all duration-300
                ${openIndex === index
                  ? 'border-primary-blue shadow-soft-lg'
                  : 'border-gray-200 shadow-soft hover:border-gray-300'
                }
              `}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-4 p-6 text-left"
              >
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gray-100 text-text-secondary'
                  }
                `}>
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className={`
                    font-semibold text-lg transition-colors duration-300
                    ${openIndex === index
                      ? 'text-primary-blue'
                      : 'text-text-primary'
                    }
                  `}>
                    {faq.question}
                  </h3>
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-[72px]">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 rounded-card-lg bg-gradient-to-br from-primary-blue/5 to-primary-purple/5 border border-primary-blue/10"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Vous avez d&apos;autres questions ?
          </h3>
          <p className="text-text-secondary mb-6">
            Notre équipe est là pour vous répondre et vous conseiller gratuitement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold hover:shadow-soft-lg transition-all duration-300"
            >
              Poser ma question
            </a>
            <a
              href="/demarrer-projet"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary-blue text-primary-blue font-semibold hover:bg-primary-blue/5 transition-all duration-300"
            >
              📞 Appel gratuit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
