/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  swcMinify: true,

  images: {
    unoptimized: true
  },

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react"
    ]
  }
};

module.exports = nextConfig;
