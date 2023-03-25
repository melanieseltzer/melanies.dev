import fs from 'fs';

import { Feed } from 'feed';

export default async function generateRSS() {
  const { allBlogPosts } = await import('../.contentlayer/generated/index.mjs');
  const { authorMetadata, siteMetadata } = await import(
    '../src/config/metadata'
  );

  const author = {
    name: authorMetadata.name,
    email: authorMetadata.email,
    link: siteMetadata.siteUrl,
  };

  const feed = new Feed({
    title: siteMetadata.siteName,
    description: siteMetadata.metaDescription,
    id: siteMetadata.siteUrl,
    link: siteMetadata.siteUrl,
    image: `${siteMetadata.images.logo}`,
    favicon: `${siteMetadata.images.favicon}`,
    copyright: `Copyright © ${new Date().getFullYear()} ${authorMetadata.name}`,
    feedLinks: {
      rss2: `${siteMetadata.siteUrl}/feed.xml`,
    },
    author,
  });

  allBlogPosts.forEach(post => {
    const slug = `${siteMetadata.siteUrl}/blog/${post.slug}`;

    feed.addItem({
      id: slug,
      title: post.title,
      link: slug,
      description: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      category: post.tags.map(tag => ({ name: tag.displayName })),
    });
  });

  fs.writeFileSync('./public/feed.xml', feed.rss2());
}

(async () => {
  await generateRSS();
})().catch(err => {
  console.error(err);
  throw err;
});
