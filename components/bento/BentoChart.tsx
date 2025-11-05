'use client'

import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'
import { TrendingUp, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

const chartData = {
  labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
  datasets: [
    {
      label: 'Croissance',
      data: [30, 45, 60, 80, 120, 150],
      borderColor: '#5a67d8',
      backgroundColor: 'rgba(90, 103, 216, 0.1)',
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 6,
      pointBackgroundColor: '#5a67d8',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      fill: true,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1a1a2e',
      padding: 12,
      borderRadius: 8,
      titleFont: { size: 14 },
      bodyFont: { size: 13 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false,
      },
      ticks: {
        color: '#666',
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#666',
      },
    },
  },
}

export function BentoChart() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="col-span-1 md:col-span-2 md:row-span-2 min-h-[400px]"
    >
      <div className="flex items-center justify-between mb-4">
        <Badge variant="gradient" icon={<TrendingUp size={14} />}>
          Croissance de notoriété
        </Badge>
        <div className="text-right">
          <div className="text-2xl font-bold text-gradient">+300%</div>
          <div className="text-xs text-text-secondary">en 6 mois</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2">
        Évolution du trafic
      </h3>
      <p className="text-sm text-text-secondary mb-6">
        Croissance exponentielle de votre présence en ligne
      </p>

      <div className="h-48 mt-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-2xl font-bold text-primary-blue">2.5K</div>
          <div className="text-xs text-text-secondary mt-1">Visiteurs/mois</div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-2xl font-bold text-primary-violet">4.2min</div>
          <div className="text-xs text-text-secondary mt-1">Temps moyen</div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-2xl font-bold text-gradient">85%</div>
          <div className="text-xs text-text-secondary mt-1">Engagement</div>
        </motion.div>
      </div>
    </Card>
  )
}
