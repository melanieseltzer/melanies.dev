import { authorMetadata } from '~/config/metadata';

import { MaxWidthContainer } from './MaxWidthContainer';

export function Footer() {
  return (
    <footer>
      <MaxWidthContainer>
        <div className="flex justify-center py-8">
          {`© ${new Date().getFullYear()}`} {authorMetadata.name}
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
