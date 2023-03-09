import { RxDividerVertical as Separator } from 'react-icons/rx';

import { DemoButton } from '~/components/projects/DemoButton';
import { SourceCodeButton } from '~/components/projects/SourceCodeButton';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

export default function Project() {
  return (
    <>
      <SEO
        titleTemplate="%s"
        // TODO: replace mocked content
        title="This is an example project title"
        description="This is an example project summary."
      />

      <Spacer size="16" />

      <div className="prose prose-lg prose-slate mx-auto">
        <article>
          <h1>
            This is an example project title that is really long and wraps
          </h1>

          <p className="lead">
            Until now, trying to style an article, document, or blog post with
            Tailwind has been a tedious task that required a keen eye for
            typography and a lot of complex custom CSS.
          </p>

          <Spacer size="4" />

          <div className="not-prose flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <DemoButton href="https://test.com" />

              <SourceCodeButton href="https://github.com/melanieseltzer" />
            </div>

            <Separator aria-hidden="true" size={15} className="text-gray-400" />
            <TechStack tech={['React', 'TypeScript', 'Next.js', 'CSS']} />
          </div>

          <hr />

          {/* eslint-disable */}
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
        </article>
      </div>
    </>
  );
}
