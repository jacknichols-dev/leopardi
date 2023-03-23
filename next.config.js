/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: { NEXT_PUBLIC_G_KEY: process.env.NEXT_PUBLIC_G_KEY },
};

module.exports = nextConfig;
