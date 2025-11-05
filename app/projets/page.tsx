'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ProjetsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Construction Barrier SVG */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Barrier stripes */}
            <rect x="20" y="40" width="160" height="40" fill="#1a1a2e" rx="4" />
            <rect x="20" y="40" width="40" height="40" fill="#FFD700" />
            <rect x="100" y="40" width="40" height="40" fill="#FFD700" />
            <rect x="60" y="40" width="40" height="40" fill="#1a1a2e" />
            <rect x="140" y="40" width="40" height="40" fill="#1a1a2e" />

            {/* Left pole */}
            <rect x="30" y="80" width="8" height="35" fill="#1a1a2e" />

            {/* Right pole */}
            <rect x="162" y="80" width="8" height="35" fill="#1a1a2e" />

            {/* Caution lights */}
            <circle cx="40" cy="60" r="6" fill="#FF6B00">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="160" cy="60" r="6" fill="#FF6B00">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </motion.div>

        {/* Emojis */}
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          🚧 👷‍♂️ 🏗️
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Travaux en cours
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Cette section est actuellement en construction. Revenez bientôt pour découvrir nos
          projets ! ⚒️
        </motion.p>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <Button variant="primary" size="lg" className="group">
              <ArrowLeft
                size={20}
                className="transition-transform duration-micro group-hover:-translate-x-1"
              />
              Retour à l&apos;accueil
            </Button>
          </Link>
        </motion.div>

        {/* Animated dots */}
        <motion.div
          className="mt-8 text-text-secondary text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>
            .
          </span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '150ms' }}>
            .
          </span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>
            .
          </span>
        </motion.div>
      </motion.div>
    </main>
  )
}
