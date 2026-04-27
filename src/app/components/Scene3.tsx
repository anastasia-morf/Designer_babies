import { ArrowRight, Home } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene3Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene3({ choices, onChoice, onHome }: Scene3Props) {
  const fullPolygenicPanel = choices.scene2 === 'B';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8 sm:px-6">
      <main className="mx-auto max-w-3xl">
        {onHome && (
          <button
            onClick={onHome}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
        )}

        <section className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Scene 3 of 5
          </p>

          <h1 className="mb-6 text-4xl font-black text-gray-900">
            A difficult result
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            {fullPolygenicPanel ? (
              <>
                <p>
                  The results come back for both embryos. Both are chromosomally
                  normal and free of the serious disease variants tested. But
                  their polygenic scores differ.
                </p>

                <p>
                  Embryo 1 scores higher for predicted cognitive traits and
                  height, but has a moderately higher predicted risk of type 2
                  diabetes.
                </p>

                <p>
                  Embryo 2 has lower predicted risk for heart disease, diabetes,
                  and stroke. Its predicted cognitive and height scores are
                  around average.
                </p>

                <p>
                  The counsellor reminds you that these scores are
                  probabilities, not guarantees. They do not determine whether a
                  child will be healthier, smarter, taller, or more successful.
                </p>

                <p>
                  The test has given you more information, but not a clear
                  answer.
                </p>
              </>
            ) : (
              <>
                <p>
                  The counsellor calls with the disease panel results. One
                  embryo stopped developing before transfer, which can happen
                  even with chromosomally normal embryos. You have one embryo
                  left.
                </p>

                <p>
                  That embryo is clear for the named diseases on the panel,
                  including cystic fibrosis, sickle cell disease, Tay-Sachs
                  disease, and Huntington’s disease.
                </p>

                <p>
                  However, the test found a variant of uncertain significance,
                  or VUS, in a gene linked to hereditary cancer syndrome. This
                  means there is a genetic change, but doctors do not yet know
                  whether it is harmful.
                </p>

                <p>
                  It might slightly increase lifetime cancer risk. It might do
                  nothing at all. Clearer answers may take years.
                </p>

                <p>
                  You can implant this embryo and accept the uncertainty, or
                  start another IVF cycle. Another cycle would take months, cost
                  thousands, and still offer no guarantee.
                </p>
              </>
            )}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => onChoice('A')}
              className="group rounded-2xl border-2 border-blue-300 bg-blue-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                A. {fullPolygenicPanel ? 'Implant Embryo 2' : 'Implant the embryo'}
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                {fullPolygenicPanel
                  ? 'Lower cardiometabolic risk, median cognitive and height scores'
                  : 'Accept the VUS, which may mean nothing'}
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                B. {fullPolygenicPanel ? 'Implant Embryo 1' : 'Start another cycle'}
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                {fullPolygenicPanel
                  ? 'Higher cognitive and height scores, elevated diabetes risk'
                  : 'Try for an embryo without the flag'}
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
