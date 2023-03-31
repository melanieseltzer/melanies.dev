import { HiOutlineClock as ReadingTimeIcon } from 'react-icons/hi';
import { RxDividerVertical as Separator } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

import { GradientText } from '~/components/GradientText';

import { formatDate } from '~/utils/date';

import { BlogPostMetadata } from '../types';

type Props = {
  className?: string;
  date: BlogPostMetadata['date'];
  readingTime: BlogPostMetadata['readingTime'];
};

export function PublishedAndReadTime({ date, readingTime, className }: Props) {
  return (
    <div
      className={twMerge(
        'flex flex-wrap items-center gap-1 text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
        className
      )}
    >
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="whitespace-nowrap">
          <time dateTime={date}>{formatDate(date)}</time>
        </dd>
      </dl>

      <Separator aria-hidden="true" size={15} className="text-gray-400" />

      <div className="flex items-center gap-2">
        <ReadingTimeIcon
          aria-hidden="true"
          className="text-gray-400"
          size={15}
        />
        <span>{readingTime}</span>
      </div>
    </div>
  );
}
