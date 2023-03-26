import { execFileSync } from 'child_process';

export const getFileLastModified = (filename: string) => {
  const raw = execFileSync('git', ['log', '-1', '--pretty=%cI', filename]);
  const date = raw.toString().trim();
  if (!date) return null; // uncommitted files
  return new Date(date).toISOString();
};
