import { Sparkles } from 'lucide-react';

import { GameMode } from '../App';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6">
      <main className="w-full max-w-2xl text-center">
        <section className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur sm:p-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-black text-gray-900 sm:text-6xl">
            Designer Babies
          </h1>

          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 sm:text-base">
            Interactive Scenario Game About Genetic Engineering
          </p>

          <button
            onClick={() => onModeSelect('narrative')}
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700 sm:text-xl"
          >
            Begin the journey
          </button>

          <p className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            A simulation exploring the ethical dimensions of reproductive
            genetic technologies. This is not medical advice or a recommendation
            of any technology.
          </p>
        </section>
      </main>
    </div>
  );
}
