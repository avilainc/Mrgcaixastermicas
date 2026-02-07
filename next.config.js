/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Mrgcaixastermicas',
  assetPrefix: '/Mrgcaixastermicas',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
