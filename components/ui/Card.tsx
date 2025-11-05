'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({
  className,
  variant = 'default',
  hover = true,
  padding = 'md',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-card transition-all duration-micro'

  const variants = {
    default:
      'bg-white border border-gray-100 shadow-soft',
    glass:
      'glass',
    gradient:
      'bg-gradient-animated text-white',
  }

  const hoverStyles = hover
    ? 'hover:-translate-y-1 hover:scale-[1.01] hover:shadow-soft-lg cursor-pointer'
    : ''

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, paddings[padding], className)}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3 className={cn('text-2xl font-bold text-text-primary', className)} {...props}>
      {children}
    </h3>
  )
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-base text-text-secondary', className)} {...props}>
      {children}
    </p>
  )
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}
