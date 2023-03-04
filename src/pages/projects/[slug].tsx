import { FiArrowUpRight as ExternalIcon } from 'react-icons/fi';
import { MdWeb as DemoIcon } from 'react-icons/md';
import { SiGithub as GitHubIcon } from 'react-icons/si';

import { Button } from '~/components/Button';
import { ButtonLink } from '~/components/ButtonLink';
import { Link } from '~/components/Link';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

export default function Project() {
  return (
    <div className="mx-auto max-w-3xl">
      <SEO
        // TODO: replace mocked content
        title="This is an example project title"
        description="This is an example project summary."
      />

      <Spacer size="8" />

      <div className="flex flex-wrap gap-4">
        <ButtonLink
          href="https://test.com"
          className="inline-flex items-center gap-2"
        >
          <DemoIcon aria-hidden={true} size={20} />
          Live demo
          <ExternalIcon aria-hidden={true} />
        </ButtonLink>

        <ButtonLink
          href="https://github.com/melanieseltzer"
          className="inline-flex items-center gap-2"
        >
          <GitHubIcon aria-hidden={true} size={20} />
          Source code
          <ExternalIcon aria-hidden={true} />
        </ButtonLink>
      </div>

      <PageIntro
        compact
        heading="This is an example project title that is really long and wraps"
        subheading="This is an example project summary"
      />

      {/* eslint-disable */}
      <div className="prose prose-lg prose-slate">
        <h2>Summary</h2>
        <p>
          Tailwind removes all of the default browser styling from paragraphs,
          headings, lists and more. This ends up being really useful for
          building application UIs because you spend less time undoing
          user-agent styles, but when you <em>really are</em> just trying to
          style some content that came from a rich-text editor in a CMS or a
          markdown file, it can be surprising and unintuitive.
        </p>

        <h3>Tech stack</h3>

        <ul>
          <li>So here is the first item in this list.</li>
          <li>In this example we're keeping the items short.</li>
          <li>Later, we'll use longer, more complex list items.</li>
        </ul>
      </div>
    </div>
  );
}
