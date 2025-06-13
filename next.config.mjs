/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output mode for Cloudflare Pages compatibility
  output: 'standalone',
  
  // Enable image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'primathon-ssr.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
    // For Cloudflare Pages, we need to set unoptimized to true
    unoptimized: true, // Required for Cloudflare Pages
    // Add local image formats preference
    formats: ['image/webp', 'image/avif'],
    // Minimize image size by setting quality
    minimumCacheTTL: 60,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configure caching behavior
  experimental: {
    // Enable App Router caching
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Optimize JavaScript output
    optimizePackageImports: ['lucide-react'],
    // Add Cloudflare compatibility
    runtime: 'nodejs',
  },
  
  // Configure headers for caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=15, s-maxage=15, stale-while-revalidate=60',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  // Remove swcMinify as it's causing warnings with Cloudflare
  // swcMinify: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;