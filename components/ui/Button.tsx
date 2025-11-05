'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showChevron?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', showChevron = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-all duration-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-gradient-primary text-white shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-white text-text-primary border-[3px] border-gray-400 shadow-sm hover:shadow-soft hover:-translate-y-0.5 hover:border-primary-blue',
      glass:
        'glass text-text-primary border-[3px] border-text-primary hover:bg-white/90 hover:backdrop-blur-glass-lg hover:-translate-y-0.5 hover:border-primary-blue',
      outline:
        'border-2 border-current bg-transparent hover:bg-white/10 hover:-translate-y-0.5',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {showChevron && (
          <ChevronRight
            className="transition-transform duration-micro group-hover:translate-x-1"
            size={18}
          />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
