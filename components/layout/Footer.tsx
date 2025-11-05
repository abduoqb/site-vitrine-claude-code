'use client'

import { motion } from 'framer-motion'
import { Github, Dribbble, Twitter, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FOOTER_LINKS } from '@/lib/constants'

const socialIcons = {
  github: Github,
  dribbble: Dribbble,
  twitter: Twitter,
  linkedin: Linkedin,
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Portfolio<span className="text-gradient">.</span>
            </h3>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Créateur d&apos;expériences digitales uniques et mémorables. Transformons ensemble
              vos idées en réalité.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {['github', 'dribbble', 'twitter', 'linkedin'].map((social) => {
                const Icon = socialIcons[social as keyof typeof socialIcons]
                return (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Produit</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Légal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto text-center mb-12">
          <h4 className="font-semibold text-text-primary mb-2">Restez informé</h4>
          <p className="text-sm text-text-secondary mb-4">
            Recevez les dernières actualités et conseils directement dans votre boîte mail
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-2 rounded-button glass focus:outline-none focus:ring-2 focus:ring-primary-blue text-sm"
            />
            <Button variant="primary" size="md" type="submit">
              <Send size={16} />
              S&apos;inscrire
            </Button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © 2025 Portfolio. Créé avec ❤️ par votre développeur.
          </p>
          <div className="flex gap-6">
            <a
              href="#mentions"
              className="text-sm text-text-secondary hover:text-text-primary hover:underline"
            >
              Mentions légales
            </a>
            <a
              href="#privacy"
              className="text-sm text-text-secondary hover:text-text-primary hover:underline"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
