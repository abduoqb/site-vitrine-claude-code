'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Construction, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function EnCoursPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon Animation */}
            <motion.div
              className="mb-8 flex justify-center"
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft-xl">
                  <Construction size={64} className="text-white" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Clock size={24} className="text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Page en cours de développement
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Cette fonctionnalité est actuellement en construction.
              Nous travaillons dur pour vous offrir la meilleure expérience possible.
            </p>

            {/* Progress Bar */}
            <div className="mb-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-text-secondary mb-2">
                <span>Progression</span>
                <span className="font-semibold">65%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                  <ArrowLeft
                    size={20}
                    className="transition-transform duration-micro group-hover:-translate-x-1"
                  />
                  Retour à l&apos;accueil
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  Nous contacter
                </Button>
              </Link>
            </div>

            {/* Info Note */}
            <p className="text-sm text-text-secondary mt-8">
              💡 Vous souhaitez être notifié du lancement ?{' '}
              <Link href="/contact" className="text-primary-blue font-semibold hover:underline">
                Contactez-nous
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
