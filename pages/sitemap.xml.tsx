import * as fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://douvelle19.com',
  }[process.env.NODE_ENV];

  const paths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return !['api', '_app.tsx', '_document.tsx', '404.tsx', 'sitemap.xml.tsx'].includes(staticPage);
    })
    .map((pagePath) => {
      return `${baseUrl}/${pagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
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
