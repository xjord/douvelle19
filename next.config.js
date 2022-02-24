/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // TODO: remove once all ts errors fixed
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    paths: {
      "_assets/*": ["./src/assets/*"],
      "_constants/*": ["./src/constants/*"],
      "_components/*": ["./src/components/*"],
      "_styles/*": ["./styles/*"],
      "_utils/*": ["./src/utils/*"],
      "_models/*": ["./src/models/*"],
      "_src/*": ["./src/*"],
    },
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
