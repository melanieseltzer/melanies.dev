const EXCLUDE = ['/blog/tags/*'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.melanies.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: EXCLUDE,

  transform: async (config, path) => ({
    loc: path,
    priority: getPriority(path),
  }),
};

const HIGH_PRIORITY = ['/blog', '/projects'];

function getPriority(path) {
  const top = path === '/';
  const high =
    HIGH_PRIORITY.includes(path) ||
    // actual blog posts (note the trailing slash)
    path.includes('/blog/') ||
    // individual project page (note the trailing slash)
    path.includes('/projects/');

  switch (true) {
    case top:
      return 1.0;
    case high:
      return 0.7;
    default:
      return 0.64;
  }
}
