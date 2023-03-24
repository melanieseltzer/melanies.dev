const HIGH_PRIORITY = ['/about', '/blog', '/projects'];
const EXCLUDE = ['/blog/page/*', '/blog/tags/*'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://melanies.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: EXCLUDE,

  transform: async (config, path) => ({
    loc: path,
    priority: getPriority(path),
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};

function getPriority(path) {
  const top = path === '/';
  const high = HIGH_PRIORITY.includes(path);

  switch (true) {
    case top:
      return 1;
    case high:
      return 0.8;
    default:
      return 0.64;
  }
}
