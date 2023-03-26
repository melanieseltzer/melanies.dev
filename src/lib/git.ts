import { execFileSync } from 'child_process';

export const getFileLastModified = (filename: string): string => {
  const raw = execFileSync('git', ['log', '-1', '--pretty=%cI', filename]);
  return new Date(raw.toString().trim()).toISOString();
};
