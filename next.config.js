/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // TODO: remove once all ts errors fixed
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
