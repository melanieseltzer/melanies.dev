import { techMap } from '~/constants';
import { clsxm } from '~/utils/clsxm';

export function RepoLanguage({ name }: { name: string }) {
  const { displayName, bg } = techMap[name];

  return (
    <div className="flex items-center space-x-1.5">
      <span className={clsxm('inline-block h-4 w-4 rounded-full', bg)} />
      <span className="font-medium">{displayName}</span>
    </div>
  );
}
