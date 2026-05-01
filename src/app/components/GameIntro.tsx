import { Baby } from 'lucide-react';

import { GameMode } from '../App';

const PRE_GAME_MENTIMETER_LINK =
  'https://www.menti.com/algbyyrscrg2';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6">
      <main className="mx-auto w-full max-w-2xl">
        <section className="mb-8 rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg">
              <Baby className="h-8 w-8 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-black text-gray-900 sm:text-6xl">
            Designer Babies
          </h1>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 sm:text-base">
            Interactive Scenario Game About Genetic Engineering
          </p>
        </section>

        <section className="mb-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          {/* <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Before you start
          </p> */}

          <h2 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
            Quick survey
          </h2>

          <div className="rounded-2xl bg-purple-50 p-6 text-center">
            {/* <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Click below to answer the Mentimeter questions. It will open in a
              new tab.
            </p> */}

            <a
              href={PRE_GAME_MENTIMETER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
            >
              Open Mentimeter
            </a>
          </div>
        </section>

        <section className="rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-10">
          <button
            onClick={() => onModeSelect('narrative')}
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700 sm:text-xl"
          >
            Begin the journey
          </button>

          {/* <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            A simulation exploring the ethical dimensions of reproductive
            genetic technologies. This is not medical advice or a recommendation
            of any technology.
          </p> */}
        </section>
      </main>
    </div>
  );
}
