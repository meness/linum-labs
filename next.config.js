const nextBundleAnalyzer = require('@next/bundle-analyzer');

// TODO remove unsafe later
const contentSecurityPolicy = `
upgrade-insecure-requests;

default-src 'self';

script-src 'self' 'unsafe-inline' 'wasm-eval' 'unsafe-eval' https://vercel.live https://vercel.com https://*.vercel.app;

font-src 'self' data: https://assets.vercel.com;

img-src 'self' data: blob: https://*.vercel.com https://*.walletconnect.com;

connect-src * 'self' data: wss://*.bridge.walletconnect.org wss://*.walletlink.org wss://*.pusher.com https://vitals.vercel-insights.com wss://*.walletconnect.com https://*.walletconnect.com;

frame-src 'self' https://vercel.live https://*.walletconnect.com https://*.walletconnect.org;

media-src * 'self' data:;
`;

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    // TODO Delete this header when 'unsafe-inline's removed from CSP
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Permissions-Policy',
    value: 'fullscreen=(), autoplay=()'
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload' // 2 years
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin' // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin'
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config) => {
    config.externals.push('pino-pretty');
    return config;
  },
  headers: async () => {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path*',
          headers: securityHeaders
        }
      ];
    }

    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io'
      }
    ].concat(process.env.NODE_ENV === 'development' ? [{ protocol: 'http', hostname: 'localhost' }] : [])
  }
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(nextConfig);
