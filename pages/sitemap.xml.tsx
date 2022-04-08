import * as fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://douvelle19.com',
  }[process.env.NEXT_PUBLIC_NODE_ENV];

  const paths = [
    'contact.tsx',
    'dates.tsx',
    'index.tsx',
    'merch.tsx',
    'music.tsx',
    'news.tsx',
    'photos.tsx',
    'videos.tsx',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl}/${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
