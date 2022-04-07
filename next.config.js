/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NODE_ENV: process.env.NODE_ENV,
    INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    MAILCHIMP_URL: process.env.MAILCHIMP_URL,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENV_ID: process.env.CONTENTFUL_ENV_ID,
  },
  typescript: {
    // TODO: remove once all ts errors fixed
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    paths: {
      '_assets/*': ['./src/assets/*'],
      '_constants/*': ['./src/constants/*'],
      '_components/*': ['./src/components/*'],
      '_styles/*': ['./styles/*'],
      '_utils/*': ['./src/utils/*'],
      '_models/*': ['./src/models/*'],
      '_src/*': ['./src/*'],
    },
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net', 'img.youtube.com'],
  },
};

module.exports = nextConfig;
