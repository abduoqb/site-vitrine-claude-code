import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#5a67d8',
          violet: '#9f7aea',
        },
        text: {
          primary: '#1a1a2e',
          secondary: 'rgba(26, 26, 46, 0.7)',
        },
        grid: {
          light: 'rgba(0, 0, 0, 0.03)',
          strong: 'rgba(0, 0, 0, 0.06)',
        },
      },
      borderRadius: {
        button: '12px',
        card: '20px',
        'card-lg': '24px',
      },
      boxShadow: {
        soft: '0 10px 28px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 18px 40px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        glass: '8px',
        'glass-lg': '12px',
      },
      transitionDuration: {
        micro: '280ms',
        smooth: '320ms',
      },
      letterSpacing: {
        tighter: '-0.5px',
        tight: '-0.3px',
      },
      animation: {
        'gradient-slow': 'gradient 12s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
