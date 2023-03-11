import { Image } from '~/components/Image';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { TechStack } from '~/components/TechStack';

import Avatar from '../../public/images/avatar.jpg';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Software engineer and perpetual tinkerer specializing in front-end JavaScript development."
      />

      <PageIntro
        heading="About Melanie Seltzer"
        subheading="Software engineer and perpetual tinkerer specializing in front-end JavaScript development."
      />

      <div className="flex flex-wrap justify-between gap-8">
        <div className="mb-12">
          <div className="sticky top-28 flex flex-col items-center gap-8">
            <Image
              src={Avatar}
              className="rounded-full p-1 ring-4 ring-secondary-600"
              alt="Portrait photo of Melanie"
              placeholder="blur"
              width={192}
            />

            <TechStack
              size="lg"
              label="Current fave tech/tools:"
              showLabel
              tech={[
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'VSCode',
              ]}
            />
          </div>
        </div>

        {/* eslint-disable */}
        <div className="prose prose-lg prose-slate">
          <h2>Hey there 👋 I'm Melanie</h2>
          <p>
            Tailwind removes all of the default browser styling from paragraphs,
            headings, lists and more. This ends up being really useful for
            building application UIs because you spend less time undoing
            user-agent styles, but when you <em>really are</em> just trying to
            style some content that came from a rich-text editor in a CMS or a
            markdown file, it can be surprising and unintuitive.
          </p>

          <h2>Tech stack</h2>

          <ul>
            <li>So here is the first item in this list.</li>
            <li>In this example we're keeping the items short.</li>
            <li>Later, we'll use longer, more complex list items.</li>
          </ul>
          <h2>Summary</h2>
          <p>
            Tailwind removes all of the default browser styling from paragraphs,
            headings, lists and more. This ends up being really useful for
            building application UIs because you spend less time undoing
            user-agent styles, but when you <em>really are</em> just trying to
            style some content that came from a rich-text editor in a CMS or a
            markdown file, it can be surprising and unintuitive.
          </p>

          <h2>Tech stack</h2>

          <ul>
            <li>So here is the first item in this list.</li>
            <li>In this example we're keeping the items short.</li>
            <li>Later, we'll use longer, more complex list items.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
