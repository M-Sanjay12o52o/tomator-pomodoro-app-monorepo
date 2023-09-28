/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
