'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Euro, ShoppingCart } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function BentoSales() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="sticky top-24 bg-white/80 backdrop-blur-sm p-4 -m-4 rounded-card mb-4">
        <Badge variant="gradient" icon={<TrendingUp size={14} />} className="mb-4">
          Augmentez vos ventes
        </Badge>

        <h3 className="text-2xl font-bold text-text-primary mb-2">
          +47% de chiffre d'affaires
        </h3>
        <p className="text-sm text-text-secondary mb-6">
          En moyenne après 6 mois de présence en ligne
        </p>

        <div className="space-y-4">
          <motion.div
            className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-3 rounded-lg bg-green-500">
              <Euro size={24} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700">3.2x</div>
              <div className="text-sm text-green-600">Plus de commandes</div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-3 rounded-lg bg-blue-500">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700">68%</div>
              <div className="text-sm text-blue-600">Taux de conversion</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-text-secondary">
            💰 Vos clients achètent directement en ligne
          </p>
        </div>
      </div>
    </Card>
  )
}
