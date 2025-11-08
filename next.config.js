/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  // Ensure proper output for Vercel
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
