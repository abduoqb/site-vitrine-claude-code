'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { TESTIMONIALS, CLIENT_LOGOS } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="default" className="mb-4">
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec nous
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="border-t border-gray-200 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-sm text-text-secondary mb-8">
            Ils nous ont fait confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((client, index) => (
              <motion.div
                key={index}
                className="text-text-secondary/50 hover:text-text-secondary/80 transition-all duration-micro font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
              >
                {client.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
