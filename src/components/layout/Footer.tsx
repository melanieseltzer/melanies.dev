import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

import { authorMetadata } from '~/config/metadata';

export function Footer() {
  return (
    <footer>
      <MaxWidthWrapper>
        <div className="flex justify-center py-8">
          {`© ${new Date().getFullYear()}`} {authorMetadata.name}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
