import { ArrowRight, Home } from 'lucide-react';

import { Choice, GameState } from '../App';

interface Scene2Props {
  choices: GameState;
  onChoice: (choice: Choice) => void;
  onHome?: () => void;
}

export function Scene2({ choices, onChoice, onHome }: Scene2Props) {
  const testedEmbryos = choices.scene1 === 'A';

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
            Scene 2 of 5
          </p>

          <h1 className="mb-6 text-4xl font-black text-gray-900">
            How far do you screen?
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            {testedEmbryos ? (
              <>
                <p>
                  Before you hang up, the counsellor mentions an expanded test
                  panel. For an extra $3,000, it screens for a small number of
                  serious single-gene diseases, such as cystic fibrosis, sickle
                  cell disease, and Tay-Sachs.
                </p>

                <p>
                  It also includes polygenic risk (PGR) scores. These estimate
                  risk for complex conditions like diabetes, heart disease, and
                  some cancers, as well as traits like height and cognitive
                  ability.
                </p>

                <p>
                  The counsellor explains that these scores are not certain
                  predictions. They show small statistical shifts in risk, and
                  are less reliable for individual decisions. They are also most
                  accurate for people of European ancestry, because many
                  research datasets are skewed that way.
                </p>

                <p>
                  “Some people feel reassured by more information,” she says.
                  “Others find it creates decisions without clear answers.”
                </p>
              </>
            ) : (
              <>
                <p>
                  You are back at the clinic for a second IVF cycle. This time,
                  the doctor suggests genetic testing.
                </p>

                <p>
                  The clinic offers two options. A basic panel screens for a
                  small number of serious single-gene conditions. These are rare,
                  but the results are usually clearer and medically meaningful.
                </p>

                <p>
                  A full panel adds polygenic risk scores for complex conditions
                  like diabetes and heart disease, plus less certain predictions
                  for traits like cognitive ability.
                </p>

                <p>
                  The doctor explains that more information can be helpful, but
                  it can also create uncertainty and difficult choices.
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
                A. Disease variants only
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Screen for serious single-gene conditions
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onChoice('B')}
              className="group rounded-2xl border-2 border-purple-300 bg-purple-50 p-5 text-left transition-all hover:scale-[1.02] hover:border-purple-400 hover:bg-purple-100"
            >
              <p className="mb-2 text-lg font-bold text-gray-900">
                B. Full polygenic panel
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Adds risk scores for complex conditions and traits
              </p>
              <ArrowRight className="mt-4 h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
