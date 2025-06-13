/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    domains: ['commondatastorage.googleapis.com'],
    unoptimized: true,
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
};

export default nextConfig;
