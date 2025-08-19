import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    nodeMiddleware: true
  },
  // Fix for Vercel deployment issues
  output: 'standalone',
  swcMinify: true,
  // Ensure proper handling of dynamic routes
  trailingSlash: false,
  // Handle build optimization
  generateEtags: false
};

export default nextConfig;
