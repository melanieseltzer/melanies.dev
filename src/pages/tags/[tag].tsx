import { SEO } from '~/components/seo';

export default function Tag() {
  return (
    <>
      <SEO
        // TODO: replace mocked tag name
        title="React posts"
        description="Content focusing on React, JavaScript, Node.js, and more."
      />
      <div>Tag page</div>
    </>
  );
}
