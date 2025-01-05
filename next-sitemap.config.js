/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://underwater-path.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 1,
  exclude: [],
  additionalPaths: async (config) => [
    {
      loc: '/about',
      changefreq: 'daily',
      priority: 1,
    },
  ],
}
