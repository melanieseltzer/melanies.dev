import { clsx } from 'clsx';

import { Spacer } from '~/components/Spacer';

export function TerminalPrompt() {
  return (
    <div
      role="img"
      aria-label="Illustration of my terminal window using Sindre Sorhus' Pure prompt"
      className="h-72 w-96 rounded-md bg-gray-900 p-4 font-mono text-xl font-semibold shadow-2xl"
    >
      <div className="flex gap-2 pb-4">
        <WindowButton color="red" />
        <WindowButton color="yellow" />
        <WindowButton color="green" />
      </div>

      <Spacer size="2" />

      <div className="text-sky-500">
        {/* tilde slash */}
        &#126;/melanies.dev
      </div>

      <Spacer size="2" />

      <div className={clsx('flex gap-2 text-2xl text-primary-500')}>
        {/* arrow prompt */}
        &#10095;
        {/* blinking cursor */}
        {/* only blink if reduce motion is off */}
        <div className="m-1 w-[12px] items-stretch bg-gray-300 motion-safe:animate-[cursorBlink_1.5s_steps(2)_infinite]" />
      </div>
    </div>
  );
}

const colorMap: Record<string, string> = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
};

function WindowButton({ color }: { color: string }) {
  return <span className={`h-3 w-3 rounded-full ${colorMap[color]}`} />;
}
