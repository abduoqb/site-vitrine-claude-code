'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { LucideIcon } from 'lucide-react'

interface BentoCardProps {
  icon: LucideIcon
  iconColor?: string
  title: string
  description: string
  className?: string
}

export function BentoCard({
  icon: Icon,
  iconColor = 'bg-gradient-primary',
  title,
  description,
  className = '',
}: BentoCardProps) {
  return (
    <Card variant="glass" padding="lg" className={className}>
      <div className={`inline-flex p-3 rounded-xl ${iconColor} mb-4`}>
        <Icon size={24} className="text-white" />
      </div>

      <CardHeader className="p-0">
        <CardTitle className="text-primary-blue hover:underline cursor-pointer text-xl mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
