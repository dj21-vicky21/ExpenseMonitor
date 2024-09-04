/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    // other environment variables
  }
};

export default nextConfig;
