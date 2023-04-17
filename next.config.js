/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    publicUrl: process.env.PUBLIC_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig
