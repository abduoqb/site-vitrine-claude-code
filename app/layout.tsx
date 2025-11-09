import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700'], // Optimized: reduced from 6 to 3 weights
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Vitr. | Créateur d\'expériences digitales',
    template: '%s | Vitr.'
  },
  description: 'Site portfolio et SaaS ultra premium. Transformons ensemble vos idées en réalité avec des expériences digitales uniques et mémorables.',
  keywords: ['portfolio', 'saas', 'développement web', 'design premium', 'next.js', 'création site web', 'développeur freelance'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Vitr.',
  publisher: 'Vitr.',

  // Open Graph
  openGraph: {
    title: 'Vitr. | Créateur d\'expériences digitales',
    description: 'Transformons ensemble vos idées en réalité avec des expériences digitales uniques et mémorables.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Vitr.',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Vitr. | Créateur d\'expériences digitales',
    description: 'Transformons ensemble vos idées en réalité avec des expériences digitales uniques et mémorables.',
    creator: '@votrecompte',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional meta
  metadataBase: new URL('https://site-vitrine-claude-code.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Google Analytics Measurement ID - Remplacez par votre ID GA4
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
