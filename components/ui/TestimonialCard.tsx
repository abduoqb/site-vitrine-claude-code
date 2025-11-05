'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
}

export function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <Card variant="glass" padding="lg" className="relative h-full flex flex-col">
      {/* Quote decoration */}
      <div className="absolute top-4 right-4 text-6xl text-primary-blue/10 font-serif leading-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-text-secondary text-base leading-relaxed mb-6 flex-1">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-secondary">
            {role} · {company}
          </p>
        </div>
      </div>
    </Card>
  )
}
