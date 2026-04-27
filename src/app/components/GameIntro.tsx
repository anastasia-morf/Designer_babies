import { Dna, GitBranch, Scale, BookOpen } from 'lucide-react';

import { GameMode } from '../App';

interface GameIntroProps {
  onModeSelect: (mode: GameMode) => void;
}

export function GameIntro({ onModeSelect }: GameIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-purple-100 p-5 shadow-lg">
              <Dna className="h-14 w-14 text-purple-700" />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-black text-gray-900">
            Designer Babies
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-gray-700">
            An interactive scenario game about embryo selection, genetic
            screening, and the ethical choices surrounding reproductive
            technologies.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-purple-300 bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-purple-100 p-4">
              <GitBranch className="h-8 w-8 text-purple-700" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Narrative Journey
              </h2>
              <p className="text-gray-600">
                Make five choices that shape the story and lead to one of three
                possible futures.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-4 text-center">
              <GitBranch className="mx-auto mb-2 h-6 w-6 text-blue-700" />
              <p className="font-semibold text-gray-800">5 scenes</p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-4 text-center">
              <Scale className="mx-auto mb-2 h-6 w-6 text-purple-700" />
              <p className="font-semibold text-gray-800">3 outcomes</p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-4 text-center">
              <BookOpen className="mx-auto mb-2 h-6 w-6 text-pink-700" />
              <p className="font-semibold text-gray-800">Ethical choices</p>
            </div>
          </div>

          <button
            onClick={() => onModeSelect('narrative')}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
          >
            Begin Narrative Journey →
          </button>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-600">
          Educational simulation exploring the ethical dimensions of reproductive
          genetic technologies. This is not medical advice or a recommendation of
          any technology.
        </p>
      </div>
    </div>
  );
}
