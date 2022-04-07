import * as fs from 'fs';

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  const paths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return !['api', '_app.tsx', '_document.tsx', '404.tsx', 'sitemap.xml.tsx'].includes(staticPage);
    })
    .map((pagePath) => {
      return `http://www.douvelle19.com/${pagePath}`;
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
